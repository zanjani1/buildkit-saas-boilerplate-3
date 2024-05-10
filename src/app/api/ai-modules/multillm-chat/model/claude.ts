// This function handles the chat with the Claude model. It takes the question and history as input and returns the response from the chat model as stream.

import Anthropic from '@anthropic-ai/sdk';
import { IMessage } from '../route';

const claude = new Anthropic();

async function ClaudeChat(question: string, messages: IMessage[]) {
  messages.push({ role: 'user', content: question });

  // Call for answer from the Claude model.
  const stream = await claude.messages.stream({
    system: `You are a helpful assistant that answers the given questions. You provide concise answers to every question with no filler words.\n\nIf a question does not make any sense, or is not factually coherent, explain why instead of answering something not correct. If you don't know the answer to a question, please don't share false information.\n\nIf an answer is much better represented in bullet points, answer in bullet points. If an answer to a question requires detailed paragraphs, use paragraphs to answer the question.`,
    messages,
    model: 'claude-3-opus-20240229',
    max_tokens: 1024,
  });

  // Prepare the stream to be returned as a Response object.
  const encoder = new TextEncoder();
  const readableStream = new ReadableStream({
    start(controller) {
      // Asynchronously iterate over the stream from conversationalRetrievalQAChain.
      (async () => {
        for await (const chunk of stream) {
          if (chunk.type === 'content_block_delta') {
            // The encoder converts each string chunk to Uint8Array before enqueueing to the stream.
            const chunkData = encoder.encode(chunk.delta?.text || '');
            controller.enqueue(chunkData);
          }
        }
        // Close the stream when the iteration is complete.
        controller.close();
      })();
    },
  });

  // Return a new Response object with the readableStream.
  return new Response(readableStream);
}

export default ClaudeChat;
