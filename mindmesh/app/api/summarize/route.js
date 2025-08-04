import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function POST(req) {
  const { thoughtText } = await req.json();

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'Summarize this idea in 1-2 lines:' },
      { role: 'user', content: thoughtText },
    ],
  });

  return Response.json({ summary: completion.choices[0].message.content });
}
