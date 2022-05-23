module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true,
        "jest/globals": true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "jest"],
	globals: {
		"cy": true
	},
    rules: {
        indent: ["error", 4],
        "linebreak-style": [
            "error",
            // process.platform === "win32" ? "windows" : "unix",
            "unix",
        ],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        eqeqeq: "error",
        "no-trailing-spaces": "error",
        "object-curly-spacing": ["error", "always"],
        "arrow-spacing": ["error", { before: true, after: true }],
        "no-console": "error",
        "react/prop-types": 0,
    },
};
