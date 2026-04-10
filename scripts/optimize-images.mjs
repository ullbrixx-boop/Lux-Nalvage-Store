import sharp from 'sharp';
import { promises as fs } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, '..', 'public');

async function optimizeImages() {
  try {
    // 1. Optimizar Solo logo.png -> logo-icon.png (para favicon y uso general)
    const soloLogoPath = join(publicDir, 'Solo logo.png');
    const soloLogoOutput = join(publicDir, 'logo-icon.png');
    
    await sharp(soloLogoPath)
      .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(soloLogoOutput);
    
    console.log('✓ Logo icon optimizado:', soloLogoOutput);

    // 2. Crear favicon.ico de múltiples tamaños
    const faviconSizes = [16, 32, 48, 64, 128, 256];
    const faviconBuffers = await Promise.all(
      faviconSizes.map(size => 
        sharp(soloLogoPath)
          .resize(size, size, { fit: 'contain', background: { r: 10, g: 10, b: 10, alpha: 1 } })
          .png()
          .toBuffer()
      )
    );
    
    // Usar el buffer del tamaño 32x32 para favicon simple (PNG-based)
    await fs.writeFile(join(publicDir, 'favicon.png'), faviconBuffers[1]);
    console.log('✓ Favicon PNG creado: 32x32');

    // 3. Optimizar Logo full.png -> logo-full.png (logo completo para web)
    const fullLogoPath = join(publicDir, 'Logo full.png');
    const fullLogoOutput = join(publicDir, 'logo-full.png');
    
    await sharp(fullLogoPath)
      .resize(800, null, { fit: 'inside', withoutEnlargement: true })
      .png({ quality: 90, compressionLevel: 9 })
      .toFile(fullLogoOutput);
    
    console.log('✓ Logo full optimizado:', fullLogoOutput);

    // 4. Crear versiones WebP para mejor rendimiento
    await sharp(soloLogoOutput)
      .webp({ quality: 85 })
      .toFile(join(publicDir, 'logo-icon.webp'));
    
    await sharp(fullLogoOutput)
      .webp({ quality: 85 })
      .toFile(join(publicDir, 'logo-full.webp'));
    
    console.log('✓ Versiones WebP creadas');

    // 5. Mostrar estadísticas
    const originalSolo = await fs.stat(soloLogoPath);
    const optimizedSolo = await fs.stat(soloLogoOutput);
    const originalFull = await fs.stat(fullLogoPath);
    const optimizedFull = await fs.stat(fullLogoOutput);

    console.log('\n📊 Estadísticas de optimización:');
    console.log(`Solo logo: ${(originalSolo.size / 1024 / 1024).toFixed(2)}MB → ${(optimizedSolo.size / 1024).toFixed(2)}KB (${Math.round((1 - optimizedSolo.size/originalSolo.size) * 100)}% reducción)`);
    console.log(`Logo full: ${(originalFull.size / 1024 / 1024).toFixed(2)}MB → ${(optimizedFull.size / 1024).toFixed(2)}KB (${Math.round((1 - optimizedFull.size/originalFull.size) * 100)}% reducción)`);

  } catch (error) {
    console.error('Error optimizando imágenes:', error);
    process.exit(1);
  }
}

optimizeImages();
