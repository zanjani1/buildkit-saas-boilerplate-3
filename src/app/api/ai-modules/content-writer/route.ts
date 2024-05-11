// This route handles the input request for the content creator
// It uses the OpenAI Function to generate content based on the given inputs. And returns the generated content as a stream.

import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { ChatCompletionMessageParam } from 'openai/resources/chat/completions.mjs';
import functionTools from './function-tools';

const openai = new OpenAI();

export const POST = async (req: Request) => {
  try {
    // Parse JSON body from the request to get topic and style
    const { topic, style, wordLimit, tone, language } = await req.json();

    // Construct the prompt for the OpenAI content generation
    const prompt = `Ttopic: ${topic}.
    Make sure the style of the content is around ${style}. And the tone is ${tone}.
    The language in which content should be written is: ${language}.
    And the word limit for each content is ${wordLimit} words.`;

    const messages: Array<ChatCompletionMessageParam> = [
      {
        role: 'system',
        content:
          'You are a professional content writer. I want you to write 5 different social media contents as per the given information. Ensure the content is structured for JSON processing.',
      },
      { role: 'user', content: prompt },
    ];

    const stream = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages,
      tools: functionTools,
      temperature: 0.7,
      max_tokens: 2000,
      stream: true,
      response_format: { type: 'json_object' },
    });

    // Prepare the stream to be returned as a Response object.
    const encoder = new TextEncoder();
    const readableStream = new ReadableStream({
      start(controller) {
        // Asynchronously iterate over the stream from conversationalRetrievalQAChain.
        (async () => {
          for await (const chunk of stream) {
            // The encoder converts each string chunk to Uint8Array before enqueueing to the stream.
            const chunkData = encoder.encode(
              chunk.choices[0]?.delta.tool_calls?.[0].function?.arguments || ''
            );
            controller.enqueue(chunkData);
          }
          // Close the stream when the iteration is complete.
          controller.close();
        })();
      },
    });

    // Return a new Response object with the readableStream.
    return new Response(readableStream);
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
