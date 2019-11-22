module.exports = {
    env: {
        node: true,
        commonjs: true,
        es6: true,
    },
    plugins: ["prettier", "sonarjs", "promise", "optimize-regex", "no-secrets"],
    extends: [
        "standard",
        "plugin:prettier/recommended",
        "plugin:node/recommended",
        "plugin:sonarjs/recommended",
        "plugin:promise/recommended",
        "plugin:array-func/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
        use: true,
    },
    parserOptions: {
        ecmaVersion: 2018,
    },
    rules: {
        indent: ["error", 4],
        "linebreak-style": ["warn", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "prettier/prettier": "error",
        "optimize-regex/optimize-regex": "warn",
        "no-secrets/no-secrets": "warn",
    },
};
