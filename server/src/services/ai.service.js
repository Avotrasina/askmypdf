import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY
});


export async function askAI(prompt) {
  const interaction = await ai.interactions.create({
    model: "gemini-3.5-flash",
    input: prompt,
  });
  return interaction.output_text
}
