# Lux Nalvage Store Theme

Tema nativo de Shopify para Lux Nalvage Store.

## Estructura principal

- `assets/`
- `config/`
- `layout/`
- `locales/`
- `sections/`
- `snippets/`
- `templates/`

## Templates incluidos

- `index.json`
- `collection.json`
- `product.json`
- `cart.json`
- `search.json`
- `page.json`
- `page.about.json`
- `page.contact.json`
- `page.help.json`
- `page.track.json`
- `page.policy-shipping.json`
- `page.policy-returns.json`

## Configuración esperada en Shopify

- Asignar el menú principal al header
- Configurar logo y favicon desde el editor del tema o usar los assets por defecto
- Crear páginas y asignar los templates alternos correspondientes
- Crear o mapear colecciones como `featured` y `new` si se quieren usar los enlaces por defecto

## Flujo recomendado con Shopify CLI

- Iniciar sesión:
  - `shopify login --store tu-tienda.myshopify.com`
- Levantar preview local del theme:
  - `shopify theme dev --store tu-tienda.myshopify.com`
- Subir el theme a Shopify:
  - `shopify theme push --store tu-tienda.myshopify.com`

## Archivos ignorados por Shopify CLI

El archivo `.shopifyignore` excluye metadatos locales del repositorio como:

- `.git/`
- `.github/`
- `.gitignore`
- `README.md`

## Nota

Este repositorio fue limpiado para quedar orientado a Shopify theme nativo, sin runtime React/Vite como base del storefront.
