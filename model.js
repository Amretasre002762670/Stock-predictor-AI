import OpenAI from "openai";
require('dotenv').config();

const openai = new OpenAI({
    apiKey: `${process.env.OPENAI_API_KEY}`,
    dangerouslyAllowBrowser: true
});

const messages = [
    {"role": "system", "content": "You are a helpful general knowledge expert"}, // holds anthing generic, how the model behaves
    {"role": "user", "content":"who invented television?"} // specific task that has to be completed
]

const response = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: messages
});

console.log(response);