# Introduction

Progressive Web App starter template for [React](https://react.dev/)-based Single-page application (SPA) development, leveraging various [Omni](https://github.com/capitec?q=omni-) libraries

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
- `format` - Runs the Prettier formatter on all `.ts` and `.tsx` files, applying format updates where necessary.

# Features
|     Feature    |  Availability | Description |
|-------------------------------|-----|-----------------------------------------------------------------|
|    Components                 | ✅  | [Omni Components](https://github.com/capitec/omni-components)   |
|    Component Intellisense     | ✅  |                                 |
|    Routing                    | ✅  | [React](https://react.dev)                   |
|    VS Code Debugging          | ✅  | [.vscode/launch.json](./.vscode/launch.json) (Opens up a second browser instance)                            |
|    Tests                      | ✅  | [Playwright](https://playwright.dev/)              |
|    Serve                      | ✅  | [react-scripts](https://www.npmjs.com/package/react-scripts)                                    |
|    Build                      | ✅  | [react-scripts](https://www.npmjs.com/package/react-scripts)                                    |
|    Build chunking             | ✅  | `/* webpackChunkName: */` compiler hints           |
|    Preview built output       | ✅  | [http-server](https://github.com/http-party/http-server)                                      |
|    Formatting                 | ✅  | [Prettier](https://prettier.io/)                   |
|    Linting                    | ❌  | Not available                                                  |
