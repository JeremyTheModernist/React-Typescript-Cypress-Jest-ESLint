module.exports = {
  extends: [
    "airbnb-typescript", // extends the airbnb typescript lint rules
    "airbnb/hooks", // extends the airbnb rules for react hooks
    "plugin:@typescript-eslint/recommended", // uses the recommended rules from @typescript-eslint
    "plugin:jest/recommended", // uses the recommended rules from jest
    "prettier", // tells eslint to use prettier configurations for formatting rather than it's own.
    "prettier/react", // extends prettier rules for react
    "prettier/@typescript-eslint", // extends prettier rules for typescript linting
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["react", "@typescript-eslint", "jest"], // uses the jest plugin
  env: {
    browser: true, // specifies that this will run in the browser
    es6: true, // specifies that this will use es6 features
    jest: true, // uses jest
  },
  parser: "@typescript-eslint/parser", // specifies the ESLint parser. it allows ESLint to understand
  // TypeScript syntax; it converts TypeScript into an ESTree-compatible form so it
  // can be used in ESLint
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2018, // Allows for the parsing of modern JS features
    sourceType: "module", // Allows for the use of imports
    project: "./tsconfig.json", // tells eslint to reference tsconfig for ts settings
    createDefaultProgram: true, // allows me to lint files not specified in tsconfig.json
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/parser/README.md#parseroptionsproject
  },
  rules: {
    "linebreak-style": "off",
    "@typescript-eslint/camelcase": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off", // this ensures that React functions don't have to have a return type like React.FC which is no longer recommended
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
  },
};
