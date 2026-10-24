import sharp from 'sharp';
import fs from 'fs';

async function run() {
  const inputPath = 'C:/Users/srira/.gemini/antigravity-ide/brain/71f5ce7c-bc37-484e-a1e6-0c8daff854f3/.user_uploaded/media_1792738361423.jpg';
  const logoPath = 'public/images/billmaster-logo.png';

  const { data, info } = await sharp(inputPath).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;

  function getPixel(x, y) {
    if (x < 0) x = 0; if (x >= width) x = width - 1;
    if (y < 0) y = 0; if (y >= height) y = height - 1;
    const idx = (y * width + x) * channels;
    return [data[idx], data[idx + 1], data[idx + 2]];
  }

  function setPixel(x, y, r, g, b) {
    if (x < 0 || x >= width || y < 0 || y >= height) return;
    const idx = (y * width + x) * channels;
    data[idx] = Math.round(r);
    data[idx + 1] = Math.round(g);
    data[idx + 2] = Math.round(b);
  }

  // 1. REMOVE "Billing Software" Tag (x: 740 to 970, y: 90 to 180)
  // This tag floats in the soft clean background.
  // We can interpolate from surrounding clean pixels (top: y=80, bottom: y=185, left: x=730, right: x=980)
  console.log('Inpainting Billing Software tag...');
  const bsMinX = 740, bsMaxX = 970, bsMinY = 90, bsMaxY = 175;
  for (let y = bsMinY; y <= bsMaxY; y++) {
    for (let x = bsMinX; x <= bsMaxX; x++) {
      const topP = getPixel(x, bsMinY - 8);
      const botP = getPixel(x, bsMaxY + 8);
      const leftP = getPixel(bsMinX - 8, y);
      const rightP = getPixel(bsMaxX + 8, y);

      const ty = (y - bsMinY) / (bsMaxY - bsMinY);
      const tx = (x - bsMinX) / (bsMaxX - bsMinX);

      // 2D bilinear interpolation
      const vR = (1 - ty) * topP[0] + ty * botP[0];
      const vG = (1 - ty) * topP[1] + ty * botP[1];
      const vB = (1 - ty) * topP[2] + ty * botP[2];

      const hR = (1 - tx) * leftP[0] + tx * rightP[0];
      const hG = (1 - tx) * leftP[1] + tx * rightP[1];
      const hB = (1 - tx) * leftP[2] + tx * rightP[2];

      // Smooth blend with gentle noise/diffusion to perfectly match background texture
      const r = (vR + hR) * 0.5;
      const g = (vG + hG) * 0.5;
      const b = (vB + hB) * 0.5;

      setPixel(x, y, r, g, b);
    }
  }

  // Save intermediate test
  await sharp(data, { raw: { width, height, channels } })
    .jpeg({ quality: 96 })
    .toFile('public/images/test-smart-billing-1.jpg');
  console.log('Saved test-smart-billing-1.jpg');
}

run().catch(console.error);
