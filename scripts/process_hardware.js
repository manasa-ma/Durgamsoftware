import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

async function processImages() {
  const sourcePath = 'C:/Users/srira/.gemini/antigravity-ide/brain/71f5ce7c-bc37-484e-a1e6-0c8daff854f3/hardware_hero_bundle_1792744005023.jpg';
  const bundleBuffer = await fs.promises.readFile(sourcePath);
  
  const meta = await sharp(bundleBuffer).metadata();
  console.log('Source bundle meta:', meta.width, meta.height);

  // 1. Create a clean cropped version of the Thermal Printer with billmaster receipt
  // Left: ~30, Top: ~240, Width: ~430, Height: ~530
  // Pad it onto a 4:3 800x600 pure clean light background
  await sharp(bundleBuffer)
    .extract({ left: 30, top: 220, width: 440, height: 550 })
    .resize(800, 600, { fit: 'contain', background: { r: 245, g: 245, b: 247, alpha: 1 } })
    .toFile('public/images/hardware-thermal-printer.jpg');
  console.log('Created hardware-thermal-printer.jpg');

  // 2. Create Barcode Scanner crop
  // Scanner is around center
  await sharp(bundleBuffer)
    .extract({ left: 350, top: 410, width: 220, height: 380 })
    .resize(800, 600, { fit: 'contain', background: { r: 245, g: 245, b: 247, alpha: 1 } })
    .toFile('public/images/hardware-barcode-scanner.jpg');
  console.log('Created hardware-barcode-scanner.jpg');

  // 3. Create Barcode Labels crop (from the label rolls on bottom right, with billmaster logo on them!)
  await sharp(bundleBuffer)
    .extract({ left: 540, top: 570, width: 420, height: 280 })
    .resize(800, 600, { fit: 'contain', background: { r: 245, g: 245, b: 247, alpha: 1 } })
    .toFile('public/images/hardware-barcode-labels.jpg');
  console.log('Created hardware-barcode-labels.jpg');

  // 4. Create Paper rolls crop
  await sharp(bundleBuffer)
    .extract({ left: 290, top: 620, width: 230, height: 240 })
    .resize(800, 600, { fit: 'contain', background: { r: 245, g: 245, b: 247, alpha: 1 } })
    .toFile('public/images/hardware-paper-rolls.jpg');
  console.log('Created hardware-paper-rolls.jpg');

  // 5. Create new Hardware Hero Bundle WITHOUT the barcode printer:
  // Cleanly crop the Thermal Receipt Printer (with billmaster receipt),
  // Barcode Scanner, and Paper Rolls (left: 20, top: 140, width: 615, height: 740)
  await sharp(bundleBuffer)
    .extract({ left: 20, top: 140, width: 615, height: 740 })
    .resize(1000, 750, { fit: 'contain', background: { r: 244, g: 245, b: 247, alpha: 1 } })
    .jpeg({ quality: 96 })
    .toFile('public/images/hardware-hero-bundle.jpg');
  console.log('Created hardware-hero-bundle.jpg cleanly without barcode printer');

  // Also copy dedicated clean images
  await fs.promises.copyFile(
    'C:/Users/srira/.gemini/antigravity-ide/brain/71f5ce7c-bc37-484e-a1e6-0c8daff854f3/hardware_barcode_scanner_1792743129950.jpg',
    'public/images/hardware-barcode-scanner.jpg'
  );
  await fs.promises.copyFile(
    'C:/Users/srira/.gemini/antigravity-ide/brain/71f5ce7c-bc37-484e-a1e6-0c8daff854f3/hardware_paper_rolls_1792743175492.jpg',
    'public/images/hardware-paper-rolls.jpg'
  );
  await fs.promises.copyFile(
    'C:/Users/srira/.gemini/antigravity-ide/brain/71f5ce7c-bc37-484e-a1e6-0c8daff854f3/hardware_barcode_labels_1792743200281.jpg',
    'public/images/hardware-barcode-labels.jpg'
  );
  console.log('Copied clean dedicated scanner, paper rolls, and labels images');
}

processImages().catch(err => {
  console.error(err);
  process.exit(1);
});
