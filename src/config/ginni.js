import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = "AIzaSyBoqFO2gqv9-J9W94fMV5mzL5eC--u2blQ";
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

async function run(prompt) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const result = await chatSession.sendMessage(prompt);
    const response = result.response;
    return response.text();  // Ensure this returns a string
  } catch (error) {
    console.error("Error in run function: ", error);
    return "Error occurred while processing your request.";  // Handle error gracefully
  }
}

export default run;










  