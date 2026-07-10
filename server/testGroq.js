import "dotenv/config";
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
    });

    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.error(error);
  }
}

test();