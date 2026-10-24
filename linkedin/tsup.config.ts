import { defineConfig } from 'tsup';

/**
 * The page scripts: `src/page/main.ts` for the editor page and `src/page/diff-main.ts` for the
 * diff page, each with what it imports, bundled for the browser as one ES module apiece at
 * `dist/app.js` and `dist/diff.js`, which the editor's server reads at start and serves at
 * `/app.js` and `/diff.js`. The workspace's own tsconfig supplies the DOM lib; nothing here is a
 * library build.
 *
 * tsup leaves a package's declared dependencies as bare imports by default, which a browser
 * cannot resolve; `noExternal` bundles the two the pages reach.
 */
export default defineConfig({
  entry: { app: 'src/page/main.ts', diff: 'src/page/diff-main.ts' },
  format: ['esm'],
  platform: 'browser',
  target: 'es2022',
  outDir: 'dist',
  bundle: true,
  noExternal: ['@engraph/result', 'zod'],
  splitting: false,
  treeshake: true,
  sourcemap: true,
  minify: false,
  dts: false,
  clean: true,
  tsconfig: './tsconfig.json',
});
