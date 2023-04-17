# Introduction

Progressive Web App starter template for [React](https://react.dev/)-based Single-page application (SPA) development, leveraging various [Omni](https://github.com/capitec?q=omni-) libraries

### Headline Features
- Typescript support.
- Dark-mode support.
- React routing.
- Basic SPA boilerplate with routing & PWA setup.

### Key Dependencies: 
- Tooling
    - [VS Code](https://code.visualstudio.com) for application development.
    - [Playwright](https://playwright.dev/) for end-to-end headless browser testing.
    - [ESLint](https://eslint.org/) for static code analysis.
    - [Prettier](https://prettier.io/) for opinionated code formatting.
    - [React Developer Tools](https://react.dev/learn/react-developer-tools) for debugging purposes supported for several popular browsers.
- Runtime
    - [Omni Components](https://github.com/capitec/omni-components) for UI components.
    - [React](https://react.dev) for SPA development.

# Usage

1️⃣ &nbsp; Create a new [repository from this template](https://github.com/capitec/template-pwa-react/generate) (or fork) and clone locally:

```bash
git clone https://github.com/{your-repo-name}.git
cd {your-repo-name}
```

2️⃣ &nbsp; Restore all package dependencies:

```bash
npm i
```

3️⃣ &nbsp; Open it in VS Code:

```bash
code .
```

# Scripts
The following NPM scripts within `package.json` should be noted:

- `serve` - Launches dev server
- `build` - Bundles code and copies artifacts for production from the `src` directory to the `build` directory.
- `preview` - Launches a simple web server, serving the `build` directory (Remember to `build` first! 🎗️).
- `test` - Launches the Playwright test runner & executes all tests within `tests` directory.
- `format` - Runs the Prettier formatter on all `.ts` files, applying format updates where necessary.

# Showcased Features
|     Feature    |  Availability |
|-------------------------------|-----|
|    [Omni Components](https://github.com/capitec/omni-components)            |  ✅ |
|    [Omni Router](https://github.com/capitec/omni-router)                | ❌ |
|    Component Intellisense     |  ✅  |
|    VS Code Debugging          |  ✅  (Will open a second debug browser)|
|    Tests                      |  ✅ |
|    Serve                      |  ✅ |
|    Build                      |  ✅ |
|    Build chunking             |  ✅ |
|    Preview built output       |  ✅ |
|    Formatting                 |  ✅ |
|    Linting                    |  ❌ |