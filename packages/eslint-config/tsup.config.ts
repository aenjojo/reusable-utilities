import { defineConfig } from 'tsup';

export default defineConfig({
	entry: ['src/index.ts'],
	splitting: false,
	clean: true,
	target: 'es2021',
	keepNames: true,
	treeshake: true,
	skipNodeModulesBundle: true,
	format: ['cjs'],
	minify: false,
});
