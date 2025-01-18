# Template Vite MobX ReactQuery

This project serves as a template for building modern React applications with a focus on state management, validation, and functional programming. It leverages **Vite** for fast builds, **MobX** for reactive state management, and other powerful libraries to streamline development.

---

## Features

- **Vite**: Lightning-fast development and build tooling.
- **MobX**: Reactive state management made simple and scalable.
- **fp-ts**: Functional programming utilities for safer, more predictable code.
- **zod**: Type-safe schema validation.
- **Biome**: All-in-one linter and code formatter.

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

The project comes with several predefined npm scripts to help streamline development:

- `start:dev`: Starts the Vite development server.
- `build`: Compiles TypeScript and builds the app for production.
- `check:code`: Type-checks the project.
- `format:code`: Formats the codebase using **Biome**.
- `lint:code`: Runs linting checks and fixes issues using **Biome**.
- `precommit`: Runs code formatting and linting before commits.
- `preview`: Serves the production build for preview.

---

## Libraries Used

### **1. React and React DOM**
React is the core library for building user interfaces, while `react-dom` handles rendering in the browser.

- [React Documentation](https://reactjs.org/)

---

### **2. Vite**
Vite is used for fast builds and an optimized development experience. It supports modern JavaScript and TypeScript out of the box.

- [Vite Documentation](https://vitejs.dev/)

---

### **3. MobX and mobx-react-lite**
MobX provides a reactive and simple approach to state management. The `mobx-react-lite` package integrates MobX with React functional components.

- [MobX Documentation](https://mobx.js.org/)

---

### **4. fp-ts**
`fp-ts` is a functional programming library for TypeScript. It brings powerful abstractions like `Option`, `Either`, and functional helpers for safer, immutable, and predictable code.

- [fp-ts Documentation](https://gcanti.github.io/fp-ts/)

---

### **5. zod**
`zod` is a schema validation library that works seamlessly with TypeScript. It ensures runtime validation of data structures with type inference.

- [zod Documentation](https://zod.dev/)

---

### **6. Biome**
Biome is an all-in-one tool for code formatting, linting, and more. It's used for maintaining code quality and consistency.

- [Biome Documentation](https://biomejs.dev/)

---

## Development Workflow

1. Start the development server:
   ```bash
   npm run start:dev
   ```

2. Check and fix code quality issues:
   ```bash
   npm run check:code
   npm run lint:code
   ```

3. Format the codebase:
   ```bash
   npm run format:code
   ```

4. Build the project for production:
   ```bash
   npm run build
   ```

---

## Folder Structure

```plaintext
src/
├── assets/       # Static assets such as images, fonts, or icons
├── components/   # Reusable React components
├── contextes/    # React Contexts for managing shared state
├── hooks/        # Custom React hooks for encapsulating reusable logic
├── init/         # Initialization logic for the app (e.g., configuration, setup)
├── libs/         # Shared libraries or utility functions
├── schemas/      # zod schemas for validation
├── stores/       # MobX stores for state management
├── main.tsx      # Application entry point
└── vite-env.d.ts # Vite-specific environment type declarations
```

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
