# 🦆 Duck Shop

Online rubber duck shop built with **Angular** and **TypeScript**. Project for the Mobile and Cloud course.

Catalog, product detail and shopping cart, all client-side. Data is static for now.

## Features

- **Home** with hero section and featured ducks
- **Shop** with the full catalog
- **Product detail** page (`/shop/:id`)
- **Cart** with add, remove, quantity update and total
- **About** page with contact info
- Lazy-loaded pages via the router

## Stack

- Angular 22 (standalone components, signals)
- TypeScript
- RxJS
- Vitest + jsdom for testing
- Prettier

## Project structure

```
src/app/
├── components/partials/header/   # header with navigation
├── models/duck.model.ts          # Duck, CartItem, DuckCategory
├── pages/
│   ├── home/
│   ├── shop/
│   ├── duck-detail/
│   ├── cart/
│   └── about/
├── services/
│   ├── duck.service.ts           # catalog (static data)
│   └── cart.service.ts           # cart state with signals
├── app.routes.ts
└── app.config.ts
```

## Routing

| Path         | Page            |
|--------------|-----------------|
| `/`          | Home            |
| `/shop`      | Catalog         |
| `/shop/:id`  | Duck detail     |
| `/cart`      | Cart            |
| `/about`     | About           |
| `**`         | Redirects to `/`|

## Data model

```ts
interface Duck {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'classic' | 'themed' | 'giant';
  image: string;
  inStock: boolean;
}
```

## Getting started

Requirements: Node.js and npm.

```bash
git clone https://github.com/zPinguzz/progetto-mobile-and-cloud.git
cd progetto-mobile-and-cloud
npm install
npm start
```

The app runs at `http://localhost:4200/`.

## Scripts

| Command         | Description                        |
|-----------------|------------------------------------|
| `npm start`     | Dev server with live reload        |
| `npm run build` | Production build into `dist/`      |
| `npm run watch` | Build in watch mode (development)  |
| `npm test`      | Run tests with Vitest              |
| `ng serve`      | Run the Local host with angular    |

## Project status
Version: 0.5 
To do:
- [ ] Replace placeholders with real images (`assets/ducks/`)
- [ ] Connect a backend/cloud service instead of static data
- [ ] Cart persistence
- [ ] Checkout

## Author

[zPinguzz - Riccardo Cotani](https://github.com/zPinguzz)
[ - Diego Sannipoli]()
[ - Jacqueline Pasolea Emanuela]()
