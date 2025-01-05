# To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/PohuliaiDanylo/ROM-RangeOfMotion-Copy.git

2. Navigate to the project folder:
    ```bash
    cd your-repository

3. Install dependencies:
   ```bash
    npm install
   ```
   or if you're using Yarn:
   ```bash
   yarn install
   ```

# Usage:
To start the project in development mode, run:
   ```bash
   npm run dev
   ```
   or if you're using Yarn:
   ```bash
   yarn dev
   ```
   Once the server is running, open your browser and visit:
   ```arduiono
   http://localhost:5173
   ```

# Technologies Used
- React
- Vite
- CSS/SCSS
- TypeScript
- Thailwind CSS

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
