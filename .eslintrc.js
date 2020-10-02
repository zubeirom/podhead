module.exports = {
    parser: '@typescript-eslint/parser',
    env: {
        commonjs: true,
        es6: true,
        node: true,
        jest: true,
    },
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin', "import"],
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    root: true,
    rules: {
        "class-methods-use-this": 0,
        "no-underscore-dangle": 0,
        "no-useless-constructor": 0,
        "indent": ["error", 4],
        "import/prefer-default-export": 0,
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ]
    },
    "settings": {
        "import/resolver": {
            "typescript": {}
        }
    }
};
