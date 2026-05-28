import { chunkText } from "../lib/utils.js";
import { summarizeChunk } from "./summarize-chunk.js";
import { summarizeDirect } from "./summarize-direct.js";

export const summarizeLargePdf = async (text: string) => {
  const chunks = chunkText(text);

  // summarize chunks
  const summaries = await Promise.all(
    chunks.map((chunk) => summarizeChunk(chunk)),
  );

  const merged = summaries.join("\n\n");

  return summarizeDirect(merged);
};
