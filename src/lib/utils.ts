export const cleanText = (text: string) => {
  return (
    text
      // normalize newlines
      .replace(/\r\n/g, "\n")

      // remove excessive newlines
      .replace(/\n{3,}/g, "\n\n")

      // remove excessive spaces
      .replace(/[ \t]+/g, " ")

      // trim
      .trim()
  );
};

export const chunkText = (
  text: string,
  chunkSize = 6000,
) => {
  const chunks: string[] = [];

  let start = 0;

  while (start < text.length) {
    chunks.push(text.slice(start, start + chunkSize));

    start += chunkSize;
  }

  return chunks;
};

export const parseAiJson = (raw: string) => {
  const cleaned = raw
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleaned);
};
