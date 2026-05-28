import { PDFParse } from "pdf-parse";
import { cleanText } from "../lib/utils.js";
import { summarizeDirect } from "./summarize-direct.js";
import { summarizeLargePdf } from "./summarize-large-pdf.js";

const LARGE_PDF_THRESHOLD = 15000;

export const processPdf = async (buffer: Buffer) => {
  const parser = new PDFParse({
    data: buffer,
  });

  const result = await parser.getText();
  const text = result.text;

  const cleaned = cleanText(text);
  
  if (cleaned.length < LARGE_PDF_THRESHOLD) {
    console.log("Using direct summarization");

    return summarizeDirect(cleaned);
  }

  console.log("Using large PDF pipeline");

  return summarizeLargePdf(cleaned);
};
