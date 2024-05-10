// This is api route for the MultiLLmChatGPT component. It uses the POST method to get the model, question, and history from the request body. It then validates the question and uses the model to get the response from the chat model.
// It streams the response back to the client.

import { NextResponse } from 'next/server';
import OpenAIChat from './model/openai';
import ClaudeChat from './model/claude';
import ChatModelFromReplicate from './model/replicate';

export interface IMessage {
  role: 'user' | 'assistant';
  content: string;
}

export const POST = async (req: Request) => {
  try {
    // Parse JSON body from the request to get topic and style
    const { model, question, history } = await req.json();

    // Validate that both topic and style are provided
    if (!question) {
      throw new Error('Question is required.');
    }

    switch (model) {
      case 'claude': {
        const response = await ClaudeChat(question, history);
        return response;
      }
      case 'mistral':
      case 'llama-2': {
        let chatModel;
        if (model === 'mistral') {
          chatModel = 'mistralai/mistral-7b-instruct-v0.2';
        } else {
          chatModel = 'meta/llama-2-70b-chat';
        }
        const response = await ChatModelFromReplicate(chatModel, question, history);
        return response;
      }
      default: {
        let chatModel = model;
        if (model === 'gpt-35') {
          chatModel = 'gpt-3.5-turbo-16k';
        }
        const response = await OpenAIChat(chatModel, question, history);
        return response;
      }
    }
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
};
