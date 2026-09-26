/**
 * Genera public/og-image.png (1200×630) y public/logo.png (512×512) a partir de las
 * plantillas HTML de esta carpeta usando la CLI de Playwright (sin dependencia en el repo).
 *
 * Uso: pnpm og:image
 * Requisito (una vez por máquina): npx playwright install chromium
 */
import { execSync } from 'node:child_process';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

const jobs = [
  ['scripts/og-image.html', 'public/og-image.png', '1200,630'],
  ['scripts/logo.html', 'public/logo.png', '512,512'],
];

for (const [source, target, size] of jobs) {
  const url = pathToFileURL(resolve(source)).href;
  execSync(`npx -y playwright screenshot --viewport-size=${size} "${url}" "${target}"`, {
    stdio: 'inherit',
  });
}
