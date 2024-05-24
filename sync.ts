import * as fs from "node:fs";
import * as process from "node:process";

(async () => {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    console.error(`Usage: npm run sync:components FROM_DIR TO_DIR`);

    process.exit(1);
  }

  await syncComponentsCode(args[0], args[1]);
})();

async function syncComponentsCode(fromDir: string, toDir: string) {
  fs.readdir(fromDir, function (err, files) {
    if (err) {
      console.error("Could not list the directory: ", fromDir, err);
      process.exit(1);
    }

    files.forEach((fileName) => handleFile(fromDir, toDir, fileName));
  });
}

function handleFile(fromDir: string, toDir: string, fileName: string) {
  if (!fileName.endsWith(".tsx")) return;

  const filePath = `${fromDir}/${fileName}`;

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error when reading file:", err);
      return;
    }

    const componentName = fileName.split(".")[0];
    const componentPath = `${toDir}/${componentName}.mdx`;

    const mdxContent = `\`\`\`tsx\n${data}\n\`\`\``;

    fs.writeFile(componentPath, mdxContent, (err) => {
      if (err) {
        console.error("Error when writing file:", filePath, err);
        return;
      }

      console.log(`Component ${componentName} was successfully written to ${componentPath}`);
    });
  });
}
