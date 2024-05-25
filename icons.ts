import * as fs from "node:fs";

const SVG_DIR = "./docs/assets/icons";
const DOCS_SVG_DIR = "/assets/icons";
const DOC_COMPONENTS_DIR = "/snippets/components/icons";
const OUTPUT_FILE = "./docs/snippets/icons/icons.mdx";

(async () => {
  await syncIconsCode();
})();

interface Icon {
  docsComponentSrc?: string;
  docsSvgSrc?: string;
  code: string;
  name: string;
}

function pascalize(str: string) {
  const string = str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function serializeIcon(icon: Icon): string {
  return `{
      name: "${icon.name}",
      docsComponentSrc: "${icon.docsComponentSrc}",
      docsSvgSrc: "${icon.docsSvgSrc}",
      code: ${icon.code}
    }`;
}

function serializeImports(icons: Icon[]): string {
  return icons
    .map((icon) => {
      return `import ${icon.name} from "${icon.docsComponentSrc}";`;
    })
    .join("\n");
}

async function syncIconsCode() {
  const icons: Icon[] = [];
  const files = fs.readdirSync(SVG_DIR);

  files.forEach((fileName) =>
    icons.push({
      docsComponentSrc: `${DOC_COMPONENTS_DIR}/${pascalize(fileName.split(".")[0])}.mdx`,
      docsSvgSrc: `${DOCS_SVG_DIR}/${fileName}`,
      code: `<${pascalize(fileName.split(".")[0])}/>`,
      name: pascalize(fileName.split(".")[0]),
    }),
  );

  const fileContent = `
${serializeImports(icons)}\n
export const icons = [${icons.map(serializeIcon).join(",\n")}];
  `;

  fs.writeFile(OUTPUT_FILE, fileContent, (err) => {
    if (err) {
      console.error("Error when writing file:", OUTPUT_FILE, err);
      return;
    }
  });
}
