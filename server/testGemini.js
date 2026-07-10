import Groq from "groq-sdk";
import dotenv from "dotenv";

dotenv.config();

import groq from "./config/groq.js";

async function test() {
  try {
    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",

      messages: [
        {
          role: "user",
          content: "Say Hello",
        },
      ],

      temperature: 0.7,
      max_tokens: 100,
    });

    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error("Groq Test Error:", error);
  }
}

test();