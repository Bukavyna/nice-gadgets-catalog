# Nice Gadgets Store

### *The gadget store you love*

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Sass](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://www.cypress.io/)

A premium, fully-responsive e-commerce catalog for smartphones, tablets, and accessories built with React, TypeScript, and SCSS.

[**Live Demo**](https://Bukavyna.github.io/nice-gadgets-catalog/)

---

## Why I Built It This Way

I wanted to design a highly interactive, production-ready store interface rather than a static product list. The focus of this project was on creating highly reusable UI components, maintaining predictable state synchronization, and polishing the user experience with meaningful micro-interactions.

Building this application provided an excellent opportunity to master advanced React concepts, including structured state management with Context, deep integration of React Router with URL search params, robust TypeScript typing, modular styling with SCSS, and automated End-to-End testing.

---

## Key Features

- **Dynamic Product Catalog:** Dedicated product spaces for phones, tablets, and accessories with advanced sorting, filtering, and pagination fully synchronized with URL search params.
- **Rich Product Profiles:** Detailed single-product views featuring dynamic image galleries, real-time color pickers, and storage capacity selectors.
- **Persistent Global State:** Full shopping cart logic with item quantity counters, automated total price calculation, and a Favorites list—both fully persistent across sessions via `localStorage`.
- **Theme Switching Engine:** Comprehensive multi-theme support enabling users to switch between light, dark, and custom design variations seamlessly.
- **Full Internationalization (i18n):** Complete English and Ukrainian localization support powered by `i18next`, remembering the user's language choice on return visits.
- **Polished Micro-Interactions:** Modern animated UI icons using Lordicon, smooth loading skeletons for asynchronous state changes, and custom notification triggers.
- **Responsive Layout:** Pixel-perfect adaptive structure optimized for fluid experiences across Mobile, Tablet, and Desktop screens.

---

## Tech Stack

- **Core:** React 18, TypeScript, React Router v6
- **Styling:** SCSS Modules, BEM methodology, CSS Variables (Themes)
- **Tooling & Optimization:** Vite
- **Localization:** i18next & react-i18next
- **Animations & Feedback:** Lordicon, React Hot Toast
- **Testing & Code Quality:** Cypress (E2E), ESLint, Prettier, Stylelint

---

## Project Structure

```txt
src/
  api/                 # API clients, HTTP wrappers, and data loaders
  components/          # Shared reusable UI elements (Buttons, Sliders, Dropdowns)
  context/             # Cart, Favorites, and Theme state providers
  hooks/               # Custom application hooks (localStorage sync, router helpers)
  i18n/                # Language localization setup and translation bundles
  Layout/              # Persistent UI shell (Header, Footer, Navigation)
  modules/             # Page-level smart modules and complex layouts
  styles/              # Global typography, variables, mixins, and theme tokens
  types/               # Centralized TypeScript interfaces and types
  utils/               # Sorting algorithms, pagination calculations, error handlers
  ```

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/Bukavyna/nice-gadgets-catalog.git
cd nice-gadgets-catalog
```

2. Install dependencies
```bash
npm install
```

3. Run the development server locally
```bash
npm start
```

4. Build for production
```bash
npm run build
```

5. Code Quality & Formatting
```bash
npm run lint      # Run ESLint & Stylelint checks
npm run test      # Run Cypress E2E tests
```

## Application Architecture (Available Pages)
/ — Engaging Home landing page with hot prices and latest model carousels.

/phones — Complete smartphone catalog.

/tablets — Complete tablet catalog.

/accessories — Complete tech accessories catalog.

/:category/:productId — Specialized product details profile.

/cart — Interactive shopping cart with interactive items manager.

/favorites — Collection of user-bookmarked items.

* — Custom 404 Error handling page.
