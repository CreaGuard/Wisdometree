import { GoogleGenAI } from "@google/genai";

// Fix: Initialize the GoogleGenAI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a book teaser using the Gemini API.
 * @param bookTitle The title of the book.
 * @returns A promise that resolves to the generated teaser text.
 */
export const generateBookTeaser = async (bookTitle: string): Promise<string> => {
  if (!bookTitle.trim()) {
    throw new Error("Book title cannot be empty.");
  }

  // Fix: Use a recommended model for basic text tasks.
  const model = 'gemini-2.5-flash';

  const prompt = `Generate a short, exciting, and mysterious teaser for the book "${bookTitle}". The teaser should be around 100-150 words, written in a style that would make someone want to read the book immediately. Do not reveal any major spoilers. Focus on the premise, the main conflict, and the atmosphere. End with a cliffhanger or a thought-provoking question.`;
  
  // Fix: Call the Gemini API using ai.models.generateContent with a prompt and system instruction.
  const response = await ai.models.generateContent({
    model: model,
    contents: prompt,
    config: {
      systemInstruction: "You are a professional book marketer specializing in writing compelling teasers.",
    }
  });
  
  // Fix: Extract the generated text correctly from the response object.
  return response.text;
};
