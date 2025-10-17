# Getting Started with Andrea Olivieri's Portfolio

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## TypeScript migration

This project has been migrated from plain JavaScript to TypeScript for the `src` folder. New source files live under `src` as `.ts` / `.tsx` and the project includes a `tsconfig.json`.

Summary of changes:
- Added `tsconfig.json`.
- Added TypeScript versions of components, context, and hooks in `src/`.
- Updated `package.json` devDependencies with `typescript`, `@types/react`, and `@types/react-dom`.

Quick start (after cloning):

1. Install dependencies (use legacy peer deps to avoid react-scripts peer warnings):

```bash
npm install --legacy-peer-deps
```

2. Start the dev server:

```bash
npm start
```

3. Run a TypeScript-only check:

```bash
npx tsc -p tsconfig.json --noEmit
```

Notes & troubleshooting:
- react-scripts@5 has peer constraints that may conflict with the very latest TypeScript versions. Using `--legacy-peer-deps` during `npm install` is a practical workaround. If you prefer, upgrade to a newer build setup (Vite, Next, or a newer react-scripts) that has broader TypeScript compatibility.
- The project currently has `strict` set to `false` in `tsconfig.json` to minimize friction during migration. If you want stricter typing, set `"strict": true` and fix any type errors reported by `tsc`.
- If you see issues importing images, make sure `src/components/Card.d.ts` (module declarations) is present. You can add other global declarations in a `src/custom.d.ts` file.
- To add a quick typecheck script to package.json, you can add:

```json
"scripts": {
	"typecheck": "tsc -p tsconfig.json --noEmit"
}
```

If you want me to enable `strict` mode, add CI type checks, or remove legacy files entirely, tell me which option you prefer and I will continue.

