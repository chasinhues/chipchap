import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";

const config = {
  input: "src/index.tsx",
  output: {
    file: "bundle.js",
    format: "esm",
  },
  plugins: [
    nodeResolve(),
    typescript(),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
  ],
};

export default config;
