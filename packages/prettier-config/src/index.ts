import { Config } from 'prettier';

export default {
	arrowParens: 'avoid',
	bracketSameLine: false,
	bracketSpacing: true,
	endOfLine: 'lf',
	jsxSingleQuote: true,
	printWidth: 120,
	quoteProps: 'consistent',
	semi: true,
	singleAttributePerLine: true,
	singleQuote: true,
	tabWidth: 4,
	trailingComma: 'all',
	useTabs: true,
	vueIndentScriptAndStyle: true,
	overrides: [
		{
			files: ['*.json', '*.yml', '*.yaml'],
			options: {
				tabWidth: 2,
				useTabs: false,
			},
		},
	],
} as Config;
