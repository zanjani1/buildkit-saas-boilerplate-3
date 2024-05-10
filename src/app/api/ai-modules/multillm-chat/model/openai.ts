// This is api route for the MultiLLmChatGPT component. It uses the POST method to get the model, question, and history from the request body. It then validates the question and uses the model to get the response from the chat model.
// It streams the response back to the client.

import OpenAI from 'openai';
import { ChatModel } from 'openai/resources/index.mjs';
import { IMessage } from '../route';

const openai = new OpenAI();

async function OpenAIChat(model: ChatModel, question: string, messages: IMessage[]) {
  messages.push({ role: 'user', content: question });

  // Call for answer from the OpenaAI models.
  const stream = await openai.chat.completions.create({
    model,
    messages: [
      {
        role: 'system',
        content: `You are a helpful assistant that answers given questions. You provide concise answers to every question with no filler words.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.\n\nIf an answer is much better represented in bullet points, answer in bullet points. If an answer to a question requires detailed paragraphs, use paragraphs to answer the question.`,
      },
      ...messages,
    ],
    max_tokens: 1024,
    stream: true,
  });

  // Prepare the stream to be returned as a Response object.
  const encoder = new TextEncoder();
  const readableStream = new ReadableStream({
    start(controller) {
      // Asynchronously iterate over the stream from conversationalRetrievalQAChain.
      (async () => {
        for await (const chunk of stream) {
          // The encoder converts each string chunk to Uint8Array before enqueueing to the stream.
          const chunkData = encoder.encode(chunk.choices[0]?.delta?.content || '');
          controller.enqueue(chunkData);
        }
        // Close the stream when the iteration is complete.
        controller.close();
      })();
    },
  });

  // Return a new Response object with the readableStream.
  return new Response(readableStream);
}

export default OpenAIChat;
