import { PDFParse } from "pdf-parse";
import { ai } from "../providers/gemini.js";
import { summarizePdfPrompt } from "../prompts/summarize-pdf.js";

export async function processPdf(buffer: Buffer) {
  const parser = new PDFParse({
    data: buffer,
  });

  const result = await parser.getText();
  const text = result.text;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: summarizePdfPrompt(text),
  });

  const markdown = response.text || "";

  return markdown;
}
