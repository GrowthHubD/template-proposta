// Gera o PDF do documento de escopo a partir da rota /documento (mesmo config do site).
// Uso: npm run pdf   (nome do arquivo vem de proposta.documento.arquivo)
// Roda o Vite dev server numa porta dedicada e imprime com o Chrome instalado
// (playwright-core, sem baixar navegador).
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";
import { chromium } from "playwright-core";

const PORT = 5198;
const outDir = new URL("../public/pdfs/", import.meta.url);
await mkdir(outDir, { recursive: true });

const server = await createServer({ server: { port: PORT }, logLevel: "error" });
await server.listen();
const { proposta } = await server.ssrLoadModule("/src/modules/proposta/data/proposta.config.tsx");
const nome = proposta.documento?.arquivo;
if (!nome) {
  await server.close();
  throw new Error("proposta.documento.arquivo não definido no proposta.config.tsx");
}

const browser = await chromium.launch({ channel: "chrome" });
try {
  const page = await browser.newPage();
  await page.goto(`http://localhost:${PORT}/documento`, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  await page.emulateMedia({ media: "print" });
  const outPath = fileURLToPath(new URL(`${nome}.pdf`, outDir));
  await page.pdf({
    path: outPath,
    printBackground: true,
    format: "A4",
    margin: { top: "14mm", bottom: "18mm", left: "16mm", right: "16mm" },
    displayHeaderFooter: true,
    headerTemplate: "<div></div>",
    footerTemplate:
      '<div style="width:100%;text-align:center;font-size:8px;color:#94a3b8;font-family:Arial,sans-serif"><span class="pageNumber"></span> / <span class="totalPages"></span></div>',
  });
  console.log(`OK public/pdfs/${nome}.pdf`);
} finally {
  await browser.close();
  await server.close();
}
