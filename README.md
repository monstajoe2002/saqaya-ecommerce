# SAQAYA E-Commerce

A simple e-commerce app developed in Vue 3 with Typescript, Pinia and Vue Router

## Project Setup

### Go to project directory

```sh
cd saqaya-ecommerce
```

### Install dependencies

```sh
npm install
```

### Run the server for development

```sh
npm run dev
```

## Project structure

```sh
.
|-- env.d.ts
|-- eslint.config.ts
|-- index.html
|-- package-lock.json
|-- package.json
|-- public
|   `-- favicon.ico
|-- src
|   |-- App.vue # Main layout component that includes the NavBar and Footer
|   |-- __tests__
|   |   |-- Cart.test.ts # Tests for cart functionality
|   |   |-- HomeView.test.ts # Tests for Home page
|   |   |-- ProductCard.test.ts # Tests for ProductCard component
|   |   `-- ProductView.test.ts # Tests for the selected product page
|   |-- assets
|   |-- components
|   |   |-- Footer.vue
|   |   |-- NavBar.vue # Navigation bar component
|   |   |-- NavbarLinks.vue
|   |   |-- SearchInput.vue # Dummy search input component
|   |   |-- StoreLogo.vue # Logo component for the store
|   |   |-- cart
|   |   |   |-- CartButton.vue # Button to open the cart side panel
|   |   |   |-- CartItem.vue # Component for displaying individual cart items along with their quantity and price
|   |   |   `-- SideCart.vue # Component for the side cart that displays all items in the cart
|   |   `-- products
|   |       |-- AddToCartButton.vue
|   |       |-- ProductCard.vue
|   |       `-- SortDropdown.vue
|   |-- lib
|   |   `-- utils.ts # Utility price formatting function for the app
|   |-- main.ts # Main entry point for the Vue app
|   |-- router
|   |   `-- index.ts # Vue Router configuration, defining routes for the app
|   |-- store
|   |   |-- cart-items.ts # Pinia store for cart items
|   |   |-- index.ts # Main Pinia store entry point
|   |   |-- products.ts # Pinia store for products
|   |   `-- selected-product.ts # Pinia store for selected product
|   |-- types
|   |   |-- cart-item.ts # Type definition for cart items
|   |   `-- product.ts # Type definition for products
|   `-- views
|       |-- HomeView.vue # Home page view
|       `-- ProductView.vue # View for displaying a selected product
|-- tsconfig.app.json # TypeScript configuration for the Vue app
|-- tsconfig.node.json # Node-specific TypeScript configuration
|-- tsconfig.json # Base TypeScript configuration, extends both app and node configs
`-- vite.config.ts # Vite configuration file
```
