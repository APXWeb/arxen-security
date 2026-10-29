// Build para GitHub Pages (subpasta), funcionando em qualquer sistema.
// Uso: npm run build:pages  — ajuste SITE_URL/BASE_PATH se o repositório mudar.
import { spawnSync } from 'node:child_process';

const env = { ...process.env, SITE_URL: 'https://apxweb.github.io', BASE_PATH: '/arxen-security/' };
const r = spawnSync('npx', ['astro', 'build'], { stdio: 'inherit', env, shell: true });
process.exit(r.status ?? 1);
