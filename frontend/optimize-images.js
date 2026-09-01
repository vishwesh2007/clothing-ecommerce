import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputFolder = "./src/assets/frontend_assets";
const outputFolder = "./src/assets/optimized";

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder, { recursive: true });
}

const files = fs.readdirSync(inputFolder);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();

  if (![".jpg", ".jpeg", ".png"].includes(ext)) {
    continue;
  }

  const inputPath = path.join(inputFolder, file);
  const outputName = path.basename(file, ext) + ".webp";
  const outputPath = path.join(outputFolder, outputName);

  await sharp(inputPath)
    .resize({
      width: 1200,
      withoutEnlargement: true,
    })
    .webp({
      quality: 80,
    })
    .toFile(outputPath);

  console.log(`Optimized: ${file}`);
}

console.log("✅ All images optimized!");