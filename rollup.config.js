import { babel } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const config = {
  input: "src/index.tsx",
  output: {
    file: pkg.module,
    format: "es",
  },
  plugins: [
    nodeResolve(),
    typescript(),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    terser(),
  ],
};

export default config;
