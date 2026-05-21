export function summarizePdfPrompt(text: string) {
  return `
You are an AI note-taking assistant.

Analyze the following PDF text and create structured study notes in markdown format.

Requirements:
- Create clear headings
- Create concise summaries
- Extract important points
- Use bullet points
- Keep formatting clean
- Make it easy to study

PDF TEXT:

${text}
`;
}
