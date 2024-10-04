import { useState } from "react";
import {
  GoogleGenerativeAI,
  HarmBlockThreshold,
  HarmCategory,
} from "@google/generative-ai"; 

/* const API_KEY = "AIzaSyDEAlfQFoXQuTJttlLhbmrLrY0GyfNIQyQ"; */
/* const API_KEY = process.env.GEMINI_API_KEY; */
const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

export const useGenerativeAI = () => {
  const [output, setOutput] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const generateContent = async (userInput: string, DATA: Array<any>, PROMPT: string) => {
    setIsLoading(true);
    setOutput("");

    try {
      const contents = [
        {
          role: "user",
          parts: [
            {
              text: `
                ${PROMPT}
                INFO: ${userInput}, DATA: ${JSON.stringify(DATA)}`,
            },
          ],
        },
      ];



      
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        safetySettings: [
          {
            category: HarmCategory.HARM_CATEGORY_HARASSMENT,
            threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
          },
        ],
      });

      const result = await model.generateContentStream({ contents });

      let buffer: string[] = [];
      for await (let response of result.stream) {
        buffer.push(response.text());
      }

      // Combina y guarda el texto como un JSON string.
      const jsonResponse = buffer.join("");
      setOutput(jsonResponse);
    } catch (e:any) {
      setOutput(`{"error": "${e.message}"}`);
    } finally {
      setIsLoading(false);
    }
  };

  return { output, isLoading, generateContent };
};