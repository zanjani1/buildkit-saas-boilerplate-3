import { ChatCompletionTool } from 'openai/resources/index.mjs';

// Function tool configuration for the OpenAI API call
const functionTools: ChatCompletionTool[] = [
  {
    type: 'function',
    function: {
      name: 'generateSocialMediaContent',
      description: 'Generate social media content based on the given inputs',
      parameters: {
        type: 'object',
        properties: {
          content: {
            type: 'array',
            items: {
              type: 'object',
              required: ['title', 'description'],
              properties: {
                title: {
                  type: 'string',
                  description: 'Title of the social media content. maximum 5-7 words',
                },
                description: {
                  type: 'string',
                  description: 'The content itself',
                },
              },
            },
          },
        },
        required: ['content'],
      },
    },
  },
];

export default functionTools;
