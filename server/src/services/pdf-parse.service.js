import { PDFParse } from "pdf-parse";
import { getHeader } from "pdf-parse/node";


export async function parsePDF(pdf) {
  // Get headers
  const rs = await getHeader(pdf, true);
  console.log(rs.headers);
  // Parsing part
  const parser = new PDFParse({url: pdf.path});
  const result = await parser.getText();
  const chunks = chunkText(result.text, 700);
  await parser.destroy();
  return chunks;
}

function chunkText(text, size = 500) {
  const chunks = [];
  for (let i = 0; i < text.length; i = i + size) {
    chunks.push(text.slice(i, i + size));
  }
  return chunks;
}
