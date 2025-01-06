# E-commerce React TypeScript Project

A modern e-commerce web application built with React, TypeScript, and Material-UI, featuring a clean architecture and best practices.

## Tech Stack

- **Framework:** React with TypeScript
- **Styling:** Tailwind CSS + Material-UI
- **State Management:** Redux Toolkit
- **API Client:** Axios + React Query
- **Form Handling:** React Hook Form + Zod
- **Routing:** React Router DOM

## Project Structure

```
src/
├── assets/                  # Static assets (images, fonts, etc.)
├── components/
│   ├── common/             # Reusable UI components
│   │   ├── Button/         # Custom buttons
│   │   ├── Input/          # Form inputs
│   │   └── Loading/        # Loading states
│   └── layout/             # Layout components
│       ├── Header/         # App header/navigation
│       ├── Footer/         # App footer
│       └── Sidebar/        # Sidebar navigation
│
├── features/               # Feature-based modules
│   ├── auth/               # Authentication
│   ├── products/           # Product catalog
│   ├── cart/               # Shopping cart
│   └── checkout/           # Checkout process
│
├── hooks/                  # Custom React hooks
│   ├── useCart.ts          # Shopping cart logic
│   └── useAuth.ts          # Authentication logic
│
├── pages/                  # Page components
│   ├── Home/               # Homepage
│   ├── Products/           # Product listing
│   ├── ProductDetail/      # Single product view
│   ├── Cart/               # Cart page
│   └── Checkout/           # Checkout flow
│
├── services/               # API services
│   ├── api.ts              # Axios instance/config
│   ├── auth.service.ts     # Auth API calls
│   └── products.service.ts  # Product API calls
│
├── store/                  # Redux store setup
│   ├── slices/             # Redux slices
│   └── index.ts            # Store configuration
│
├── types/                  # TypeScript types
│   ├── product.types.ts    # Product interfaces
│   └── user.types.ts       # User interfaces
│
└── utils/                  # Utility functions
    ├── constants.ts        # App constants
    └── helpers.ts          # Helper functions
```

## Architecture Explanation

- **Component-Based Structure:** Components are divided into common (reusable) and layout (structural) components.
- **Feature-First Organization:** Business logic is organized by features, making the codebase more maintainable.
- **Type Safety:** TypeScript interfaces ensure type safety across the application.
- **State Management:** Redux Toolkit for global state, React Query for server state.
- **API Integration:** Centralized API handling with Axios for consistent data fetching.

## Getting Started

1. Clone the repository
2. Install dependencies:

```
yarn install
```

3. Start the development server:

```
yarn dev
```

4. Build for production:

```
yarn build
```

## Development Guidelines

- Use TypeScript for all new files
- Follow the feature-based structure for new features
- Implement proper type definitions in the `types` directory
- Use custom hooks for reusable logic
- Keep components small and focused
- Use Material-UI components with Tailwind for styling

## Contributing

1. Create a new branch for your feature
2. Follow the existing code structure
3. Add proper types and documentation
4. Submit a pull request

## License

MIT
