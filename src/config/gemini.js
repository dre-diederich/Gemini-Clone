

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai"

  const modelName = "gemini-1.0-pro"
  const apiKey = "AIzaSyBxKE8X47o2u1dJKnTFf7ggRrFrNPZjiBk";


  async function runChat(prompt) {
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-1.0-pro",
    });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
      responseMimeType: "text/plain",
    };

    const chat = model.startChat({
      generationConfig,
      // safetySettings: Adjust safety settings
       // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });

    const result = await chat.sendMessage(prompt);
    const response = result.response
    console.log(response.text());
    return response.text();
  }
  
  export default runChat;