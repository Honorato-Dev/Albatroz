import tailwind from 'rollup-plugin-tailwindcss';
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

export default {
   input: "src/index.tsx",
   output: [
      {
         file: pkg.main,
         format: "cjs",
         exports: "named",
         sourcemap: true,
         strict: false,
      },
   ],
   plugins: [
    tailwind({
        input: 'path/to/entry.css', // required
        // Tailor the emitted stylesheet to the bundle by removing any unused CSS
        // (highly recommended when packaging for distribution).
        purge: false,
      }),
      typescript({ objectHashIgnoreUnknownHack: true }),
   ],
   external: ["react", "react-dom","react-email", "axios", "react-toastify", "react-hook-form", "next","next-auth","bcryptjs"],
};