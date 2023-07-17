import { Linter } from 'eslint';

export default {
	root: true,
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'prettier'],
	env: {
		browser: true,
		node: true,
		es6: true,
		es2022: true,
		jest: true,
	},
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	rules: {
		'comma-dangle': ['error', 'always-multiline'],
		'eqeqeq': 'error',
		'max-nested-callbacks': 'error',
		'no-alert': 'error',
		'no-console': 'off',
		'no-implicit-coercion': 'error',
		'no-inline-comments': 'warn',
		'no-magic-numbers': 'error',
		'no-mixed-operators': 'error',
		'no-multi-assign': 'error',
		'no-negated-condition': 'warn',
		'no-new-wrappers': 'error',
		'no-shadow': [
			'error',
			{
				allow: ['err', 'resolve', 'reject'],
			},
		],
		'no-var': 'error',
		'prefer-const': 'error',
		'yoda': 'error',
	},
} as Linter.Config;
