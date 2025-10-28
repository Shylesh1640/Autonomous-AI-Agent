import "dotenv/config";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

// Initialize Gemini model
const model = new ChatGoogleGenerativeAI({
  model: "gemini-1.5-flash", // or "gemini-1.5-pro"
  apiKey: process.env.GOOGLE_API_KEY, // set this in your .env
});

// Create a ReAct agent using LangGraph
const agent = await createReactAgent({
  llm: model,
  tools: [], // add tools if needed
});

// Example usage
const response = await agent.invoke({
    messages: [
        {
            role: 'user',
            content: "Write a poem about AI and creativity."
        }
    ]
});
console.log("Poem response:", response.messages.at(-1).content);

const result = await agent.invoke({
    messages: [
        {
        role: 'user',
        content: "Hello,how can you help me?"
        },     
    ],
});

console.log("Help response:", result.messages.at(-1).content);
