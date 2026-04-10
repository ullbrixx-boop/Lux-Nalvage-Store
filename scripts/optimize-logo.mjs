import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

async function optimizeLogo() {
  try {
    const inputPath = join(publicDir, 'Solo logo.png');
    
    // 1. Logo icon optimizado (512x512)
    await sharp(inputPath)
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(join(publicDir, 'logo-icon.png'));
    console.log('✓ logo-icon.png creado');

    // 2. Favicon 32x32
    await sharp(inputPath)
      .resize(32, 32, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 1 } })
      .png()
      .toFile(join(publicDir, 'favicon.png'));
    console.log('✓ favicon.png creado (32x32)');

    // 3. Versiones WebP
    await sharp(join(publicDir, 'logo-icon.png'))
      .webp({ quality: 85 })
      .toFile(join(publicDir, 'logo-icon.webp'));
    console.log('✓ logo-icon.webp creado');

    // 4. Logo para header (smaller 64x64)
    await sharp(inputPath)
      .resize(64, 64, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 90 })
      .toFile(join(publicDir, 'logo-header.png'));
    console.log('✓ logo-header.png creado');

    // Estadísticas
    const original = await fs.stat(inputPath);
    const optimized = await fs.stat(join(publicDir, 'logo-icon.png'));
    console.log(`\n📊 ${(original.size / 1024).toFixed(1)}KB → ${(optimized.size / 1024).toFixed(1)}KB (${Math.round((1 - optimized.size/original.size) * 100)}% reducción)`);

  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

optimizeLogo();
