// Gera o PDF da proposta como uma página única e contínua, fiel ao site.
// O modo de impressão do Chromium recalcula as seções min-h-screen e quebra o
// layout, então capturamos a página renderizada e empacotamos a imagem em PDF.
// Uso: npm run pdf -- <url> <saida.pdf>
import { chromium } from "playwright";

const url = process.argv[2] ?? "http://localhost:8080";
const out = process.argv[3] ?? "public/pdfs/proposta.pdf";
const WIDTH = 1440;

const browser = await chromium.launch();
try {
  const page = await browser.newPage({ viewport: { width: WIDTH, height: 900 } });
  await page.goto(url, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);

  // Rola a página inteira para disparar as animações de entrada (whileInView).
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 500) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 250));
    }
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 600));
  });

  const shot = await page.screenshot({ fullPage: true, type: "png" });
  const height = await page.evaluate(() => document.documentElement.scrollHeight);

  const pdfPage = await browser.newPage();
  await pdfPage.setContent(
    `<html><body style="margin:0;background:#000"><img style="display:block;width:${WIDTH}px" src="data:image/png;base64,${shot.toString("base64")}"/></body></html>`,
  );
  await pdfPage.pdf({
    path: out,
    width: `${WIDTH}px`,
    height: `${height}px`,
    printBackground: true,
    pageRanges: "1",
  });
  console.log(`PDF gerado: ${out} (${WIDTH}x${height}px)`);
} finally {
  await browser.close();
}
