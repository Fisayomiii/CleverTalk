// import axios from "axios";
import { Configuration, OpenAIApi } from "openai";

// Api key will not work for you
const OPENAI_API_KEY = (`${(import.meta.env.VITE_REACT_APP_API_KEY)}`);

const configuration = new Configuration({
  apiKey: OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function sendMessageToOpenAI(message) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: message,
    temperature: 0.9,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });
  return response.data.choices[0].text;
};
