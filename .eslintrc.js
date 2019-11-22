module.exports = {
    env: {
        node: true,
        commonjs: true,
        es6: true,
    },
    extends: ["standard", "plugin:prettier/recommended"],
    plugins: ["prettier"],
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
    },
};
