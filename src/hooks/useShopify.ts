import { useEffect, useState } from "react";
import { getProducts, getProduct, getCollections, getCollection } from "@/lib/shopify";

export function useProducts(limit = 20) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getProducts(limit)
      .then(setProducts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [limit]);

  return { products, loading, error };
}

export function useProduct(handle: string) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!handle) return;
    getProduct(handle)
      .then(setProduct)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [handle]);

  return { product, loading, error };
}

export function useCollections(limit = 10) {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCollections(limit)
      .then(setCollections)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [limit]);

  return { collections, loading, error };
}

export function useCollection(handle: string) {
  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!handle) return;
    getCollection(handle)
      .then(setCollection)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [handle]);

  return { collection, loading, error };
}
