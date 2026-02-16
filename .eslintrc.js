module.exports = {
    "env": {
        "browser": true,
        "es2021": true
        // "jest": true
    },
    "extends": ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended'],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint",
        "react",
        "react-hooks"
    ],
    "rules": {
        'no-shadow': 'off',
        'no-underscore-dangle': 'off',
        'indent': ['warn', 4],
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': 'off',
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': ['error', 4],
        'react/jsx-props-no-spreading': 'off',
        'react/function-component-definition': 'off',
        'import/no-unresolved': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/no-unused-vars': "warn",
        'react/require-default-props': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [2, {extensions: ['.js', '.jsx', '.tsx']}],
        'react/display-name': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react/jsx-closing-tag-location": "error",
        "react/jsx-curly-spacing": "error",
        "react/jsx-wrap-multilines": "error",
        "react/self-closing-comp": "error",
        "react/jsx-closing-bracket-location": "warn",
        "react/jsx-boolean-value": "error",
        'react-hooks/exhaustive-deps': 'error'
    },
    ignorePatterns: ["**/*.css", "**/*.scss"],
    globals: {
        '__IS_DEV__': true
    }
}
