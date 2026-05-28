import { ai } from "../providers/gemini.js";

export const summarizeChunk = async (chunk: string) => {
  const response = await ai.models.generateContent({
    model: "gemini-3.1-flash-lite",
    contents: `
Summarize the following text into concise study notes.

TEXT:
${chunk}
`,
  });

  return response.text || "";
};
