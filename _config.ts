import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import esbuild from "lume/plugins/esbuild.ts";

const site = lume();

site.use(postcss());
site.use(esbuild({extensions: ['.page.tsx']}));

export default site;
