import sharp from 'sharp';
import fs from 'fs';

async function main() {
  const inputPath = 'C:/Users/srira/.gemini/antigravity-ide/brain/71f5ce7c-bc37-484e-a1e6-0c8daff854f3/.user_uploaded/media_1792738361423.jpg';
  const logoPath = 'public/images/billmaster-logo.png';

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  function setPixel(x, y, r, g, b) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = (y * width + x) * channels;
    data[idx] = Math.round(r);
    data[idx + 1] = Math.round(g);
    data[idx + 2] = Math.round(b);
  }

  function getPixel(x, y) {
    if (x < 0) x = 0; if (x >= width) x = width - 1;
    if (y < 0) y = 0; if (y >= height) y = height - 1;
    const idx = (y * width + x) * channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  }

  // -------------------------------------------------------------
  // 1. REMOVE "Billing Software" Tag (x: 740 to 960, y: 95 to 165)
  // Background above laptop is smooth studio ambient gradient
  // -------------------------------------------------------------
  console.log('Removing Billing Software tag...');
  const bsX1 = 740, bsX2 = 960, bsY1 = 95, bsY2 = 165;
  for (let y = bsY1; y <= bsY2; y++) {
    for (let x = bsX1; x <= bsX2; x++) {
      // Sample cleanly from above and horizontally outside
      const topP = getPixel(x, bsY1 - 10);
      const leftP = getPixel(bsX1 - 10, y);
      const rightP = getPixel(bsX2 + 10, y);

      const tx = (x - bsX1) / (bsX2 - bsX1);
      const hP = [
        (1 - tx) * leftP[0] + tx * rightP[0],
        (1 - tx) * leftP[1] + tx * rightP[1],
        (1 - tx) * leftP[2] + tx * rightP[2],
      ];

      // Blend top background smoothly downwards
      const ty = (y - bsY1) / (bsY2 - bsY1);
      const r = (1 - ty * 0.4) * topP[0] + (ty * 0.4) * hP[0];
      const g = (1 - ty * 0.4) * topP[1] + (ty * 0.4) * hP[1];
      const b = (1 - ty * 0.4) * topP[2] + (ty * 0.4) * hP[2];

      setPixel(x, y, r, g, b);
    }
  }

  // -------------------------------------------------------------
  // 2. REMOVE "2 Inch Printer" Tag (x: 105 to 305, y: 710 to 805)
  // Behind:
  // - y: 710 to 760: dark black/grey printer casing (rgb ~22, 18, 18)
  // - y: 760 to 805: soft pedestal floor (rgb ~225, 210, 202) and glowing red ring
  // -------------------------------------------------------------
  console.log('Removing 2 Inch Printer tag...');
  const prX1 = 105, prX2 = 305, prY1 = 710, prY2 = 805;
  for (let y = prY1; y <= prY2; y++) {
    for (let x = prX1; x <= prX2; x++) {
      // Check if inside printer casing zone or pedestal zone
      // Printer bottom curve runs from roughly (105, 750) to (290, 755)
      const printerBottomY = 745 + (x - prX1) * 0.05;

      if (y <= printerBottomY) {
        // Printer casing: sample vertically from the clean printer casing above (y = 680-705)
        const casingP = getPixel(x, 695);
        // Add subtle natural vertical gradient / lighting
        const dy = (y - 695) * 0.15;
        setPixel(x, y, Math.max(10, casingP[0] - dy), Math.max(8, casingP[1] - dy), Math.max(8, casingP[2] - dy));
      } else {
        // Pedestal floor below printer: interpolate from below and left/right
        const botP = getPixel(x, prY2 + 8);
        const leftP = getPixel(prX1 - 8, y);
        const rightP = getPixel(prX2 + 8, y);

        const tx = (x - prX1) / (prX2 - prX1);
        const ty = (y - printerBottomY) / (prY2 - printerBottomY);

        const hR = (1 - tx) * leftP[0] + tx * rightP[0];
        const hG = (1 - tx) * leftP[1] + tx * rightP[1];
        const hB = (1 - tx) * leftP[2] + tx * rightP[2];

        const r = (1 - ty) * 0.3 * leftP[0] + ty * 0.7 * botP[0] + (1 - ty) * 0.3 * hR;
        const g = (1 - ty) * 0.3 * leftP[1] + ty * 0.7 * botP[1] + (1 - ty) * 0.3 * hG;
        const b = (1 - ty) * 0.3 * leftP[2] + ty * 0.7 * botP[2] + (1 - ty) * 0.3 * hB;

        setPixel(x, y, r, g, b);
      }
    }
  }

  // -------------------------------------------------------------
  // 3. REMOVE "Barcode Scanner" Tag (x: 80 to 320, y: 260 to 385)
  // Behind:
  // - Scanner handle: x: 155 to 225
  // - Left of handle: background + glowing red ribbon
  // - Right of handle: background + ribbon
  // -------------------------------------------------------------
  console.log('Removing Barcode Scanner tag...');
  const scX1 = 80, scX2 = 320, scY1 = 260, scY2 = 385;
  for (let y = scY1; y <= scY2; y++) {
    // Handle center curve: scanner handle curves slightly from x: 185 at y: 260 to x: 195 at y: 385
    const ty = (y - scY1) / (scY2 - scY1);
    const handleCenterX = 180 + ty * 18;
    const handleHalfWidth = 26 - ty * 2;

    for (let x = scX1; x <= scX2; x++) {
      if (Math.abs(x - handleCenterX) <= handleHalfWidth) {
        // Handle matte black/dark grey plastic
        const topH = getPixel(x, scY1 - 8);
        const botH = getPixel(x, scY2 + 8);

        // Cylindrical 3D lighting across the handle
        const dx = (x - handleCenterX) / handleHalfWidth; // -1 to 1
        const cylLight = Math.cos(dx * 1.3); // brighter in center, darker at edges

        const baseR = (1 - ty) * topH[0] + ty * botH[0];
        const baseG = (1 - ty) * topH[1] + ty * botH[1];
        const baseB = (1 - ty) * topH[2] + ty * botH[2];

        setPixel(x, y, baseR * cylLight, baseG * cylLight, baseB * cylLight);
      } else if (x < handleCenterX - handleHalfWidth) {
        // Left background + glowing ring
        const leftP = getPixel(scX1 - 8, y);
        const topP = getPixel(x, scY1 - 8);
        const botP = getPixel(x, scY2 + 8);

        const tx = (x - scX1) / (handleCenterX - handleHalfWidth - scX1);
        const r = (1 - tx) * leftP[0] + tx * ((1 - ty) * topP[0] + ty * botP[0]);
        const g = (1 - tx) * leftP[1] + tx * ((1 - ty) * topP[1] + ty * botP[1]);
        const b = (1 - tx) * leftP[2] + tx * ((1 - ty) * topP[2] + ty * botP[2]);

        setPixel(x, y, r, g, b);
      } else {
        // Right background + glowing ring
        const rightP = getPixel(scX2 + 8, y);
        const topP = getPixel(x, scY1 - 8);
        const botP = getPixel(x, scY2 + 8);

        const tx = (x - (handleCenterX + handleHalfWidth)) / (scX2 - (handleCenterX + handleHalfWidth));
        const r = tx * rightP[0] + (1 - tx) * ((1 - ty) * topP[0] + ty * botP[0]);
        const g = tx * rightP[1] + (1 - tx) * ((1 - ty) * topP[1] + ty * botP[1]);
        const b = tx * rightP[2] + (1 - tx) * ((1 - ty) * topP[2] + ty * botP[2]);

        setPixel(x, y, r, g, b);
      }
    }
  }

  // -------------------------------------------------------------
  // 4. ADD BRAND NAME UNDER DOWNLOAD (x: 412 to 575, y: 840 to 880)
  // Clear the text "Billmaster" under "Download", and overlay official brand logo!
  // -------------------------------------------------------------
  console.log('Updating Download section with official brand name...');
  // Fill the area under "Download" with clean white
  for (let y = 840; y <= 880; y++) {
    for (let x = 410; x <= 580; x++) {
      setPixel(x, y, 255, 255, 255);
    }
  }

  // Convert buffer back to Sharp image
  let retouchedImage = sharp(data, { raw: { width, height, channels } });

  // Prepare official brand logo to place under "Download"
  // Height: ~36px, width: ~90px
  const brandLogoResized = await sharp('public/images/billmaster-logo.png')
    .resize({ height: 38 })
    .toBuffer();

  const brandMeta = await sharp(brandLogoResized).metadata();

  // Composite the brand logo under "Download" at left: 412, top: 843
  const finalImageBuffer = await retouchedImage
    .composite([
      { input: brandLogoResized, top: 843, left: 412 }
    ])
    .jpeg({ quality: 96 })
    .toBuffer();

  await fs.promises.writeFile('public/images/billmaster-smart-billing.jpg', finalImageBuffer);
  await fs.promises.writeFile('public/images/billmaster-hero-mockup.png', finalImageBuffer);
  console.log('Successfully saved retouched billmaster-smart-billing.jpg!');
}

main().catch(console.error);
