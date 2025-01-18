# Template Vite MobX ReactQuery

This template provides a modern setup for building scalable React applications with efficient state management, data fetching, and routing.

---

## Features

- **Vite**: Fast development and build tooling.
- **MobX**: Reactive state management.
- **React Query**: Optimized data fetching and caching.
- **TanStack Router**: Flexible routing system with powerful features.
- **fp-ts**: Functional programming utilities.
- **zod**: Type-safe schema validation.
- **Biome**: Unified linter and formatter.

---

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd template-vite-mobx-reactquery
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

---

## Scripts

- `start:dev`: Start the development server.
- `start:prod`: Serve the production build using http-server on http://localhost:5000.
- `build`: Build the application for production.
- `check:code`: Type-check the project.
- `format:code`: Format the codebase using Biome.
- `lint:code`: Lint and fix issues in the codebase.
- `precommit`: Runs type-checking, formatting, and linting before commits.

---

## Development Workflow

1. Start the development server: `npm run start:dev`.
2. Build the application for production: `npm run build`.
3. Ensure code quality with `check:code`, `format:code`, and `lint:code`.

---

## Folder Structure

```plaintext
src/
├── assets/       # Static assets (images, fonts, etc.)
├── components/   # Reusable and page-specific components
├── contextes/    # React Contexts for shared state
├── hooks/        # Custom React hooks
├── init/         # Application initialization logic
├── libs/         # Shared libraries and utilities
├── schemas/      # zod schemas for validation
├── stores/       # MobX stores for state management
├── main.tsx      # Application entry point
└── vite-env.d.ts # Vite environment type declarations
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
