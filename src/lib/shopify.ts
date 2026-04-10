const SHOPIFY_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

const SHOPIFY_STOREFRONT_API = `https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`;

async function shopifyFetch(query: string, variables = {}) {
  if (!SHOPIFY_DOMAIN || !STOREFRONT_TOKEN) {
    throw new Error("Shopify credentials not configured");
  }

  const response = await fetch(SHOPIFY_STOREFRONT_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await response.json();
  if (json.errors) throw new Error(json.errors[0].message);
  return json.data;
}

// Queries
export const getProductsQuery = `
  query getProducts($first: Int!) {
    products(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          priceRange {
            minVariantPrice { amount currencyCode }
            maxVariantPrice { amount currencyCode }
          }
          compareAtPriceRange {
            minVariantPrice { amount currencyCode }
          }
          images(first: 1) {
            edges { node { url altText } }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                availableForSale
                price { amount currencyCode }
              }
            }
          }
          tags
          productType
        }
      }
    }
  }
`;

export const getProductQuery = `
  query getProduct($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      priceRange {
        minVariantPrice { amount currencyCode }
      }
      compareAtPriceRange {
        minVariantPrice { amount currencyCode }
      }
      images(first: 5) {
        edges { node { url altText } }
      }
      variants(first: 10) {
        edges {
          node {
            id
            title
            availableForSale
            price { amount currencyCode }
          }
        }
      }
      tags
      metafields(first: 5) {
        edges { node { key value } }
      }
    }
  }
`;

export const getCollectionsQuery = `
  query getCollections($first: Int!) {
    collections(first: $first) {
      edges {
        node {
          id
          title
          handle
          description
          image { url altText }
        }
      }
    }
  }
`;

export const getCollectionProductsQuery = `
  query getCollectionProducts($handle: String!, $first: Int!) {
    collection(handle: $handle) {
      id
      title
      handle
      description
      image { url altText }
      products(first: $first) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice { amount currencyCode }
            }
            compareAtPriceRange {
              minVariantPrice { amount currencyCode }
            }
            images(first: 1) {
              edges { node { url altText } }
            }
            variants(first: 5) {
              edges {
                node {
                  id
                  title
                  availableForSale
                }
              }
            }
            tags
          }
        }
      }
    }
  }
`;

export const createCartMutation = `
  mutation createCart($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        lines(first: 10) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  product { title handle }
                  image { url }
                }
              }
            }
          }
        }
        cost {
          subtotalAmount { amount currencyCode }
          totalAmount { amount currencyCode }
        }
      }
    }
  }
`;

export async function getProducts(limit = 20) {
  const data = await shopifyFetch(getProductsQuery, { first: limit });
  return data.products.edges.map((e: any) => transformProduct(e.node));
}

export async function getProduct(handle: string) {
  const data = await shopifyFetch(getProductQuery, { handle });
  return data.product ? transformProduct(data.product, true) : null;
}

export async function getCollections(limit = 10) {
  const data = await shopifyFetch(getCollectionsQuery, { first: limit });
  return data.collections.edges.map((e: any) => ({
    id: e.node.id,
    handle: e.node.handle,
    title: e.node.title,
    description: e.node.description,
    heroMedia: e.node.image ? { src: e.node.image.url, alt: e.node.image.altText || e.node.title } : { src: "/placeholder.svg", alt: e.node.title },
  }));
}

export async function getCollection(handle: string) {
  const data = await shopifyFetch(getCollectionProductsQuery, { handle, first: 20 });
  if (!data.collection) return null;
  return {
    ...data.collection,
    id: data.collection.id,
    heroMedia: data.collection.image ? { src: data.collection.image.url, alt: data.collection.image.altText || data.collection.title } : { src: "/placeholder.svg", alt: data.collection.title },
    products: data.collection.products.edges.map((e: any) => transformProduct(e.node)),
  };
}

export async function createCart(lines: { merchandiseId: string; quantity: number }[]) {
  const data = await shopifyFetch(createCartMutation, {
    input: { lines },
  });
  return data.cartCreate.cart;
}

function transformProduct(node: any, full = false) {
  const product: any = {
    id: node.id,
    handle: node.handle,
    title: node.title,
    description: node.description,
    price: node.priceRange.minVariantPrice,
    compareAtPrice: node.compareAtPriceRange?.minVariantPrice?.amount 
      ? { amount: Number(node.compareAtPriceRange.minVariantPrice.amount), currencyCode: node.compareAtPriceRange.minVariantPrice.currencyCode }
      : undefined,
    tags: node.tags || [],
    media: node.images?.edges?.map((e: any) => ({ src: e.node.url, alt: e.node.altText || node.title })) || [{ src: "/placeholder.svg", alt: node.title }],
    variants: node.variants?.edges?.map((e: any) => ({
      id: e.node.id,
      title: e.node.title,
      availableForSale: e.node.availableForSale,
    })) || [],
    collectionHandles: [],
  };

  if (full) {
    product.highlights = node.metafields?.edges?.filter((e: any) => e.node.key === "highlights")?.map((e: any) => e.node.value) || [];
    product.specs = node.metafields?.edges?.filter((e: any) => e.node.key.startsWith("spec_"))?.map((e: any) => ({
      label: e.node.key.replace("spec_", ""),
      value: e.node.value,
    })) || [];
  }

  return product;
}
