import { ai } from "../providers/gemini.js";
import { summarizePdfPrompt } from "../prompts/summarize-pdf.js";
import { parseAiJson } from "../lib/utils.js";

export const summarizeDirect = async (text: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: summarizePdfPrompt(text),
  });

  const raw = response.text || "{}";
  return parseAiJson(raw);
};
