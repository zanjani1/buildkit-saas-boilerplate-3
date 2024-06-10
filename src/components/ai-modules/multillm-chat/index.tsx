// This is the MultiLLmChatGPT component that uses the SelectChatModel component to select the chat model.

'use client';

import { FC, useState } from 'react';
import { cn, errorToast } from '@/utils/utils';
import { LuSend } from 'react-icons/lu';
import { RiMessage2Fill } from 'react-icons/ri';
import { PiChatsLight } from 'react-icons/pi';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { SubmitButton } from '@/components/SubmitButton';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface MultiLLmChatGPTProps {}

interface IChat {
  role: string;
  content: string;
}

// Available chat models
export const modelOptions = [
  {
    value: 'gpt-35',
    label: 'GPT-3.5',
  },
  {
    value: 'gpt-4',
    label: 'GPT-4',
  },
  {
    value: 'claude',
    label: 'Claude',
  },
  {
    value: 'mistral',
    label: 'Mistral',
  },
  {
    value: 'llama-2',
    label: 'Llama 2',
  },
];

const MultiLLmChatGPT: FC<MultiLLmChatGPTProps> = () => {
  const [chatModel, setChatModel] = useState<string>(modelOptions[0].value);
  const [input, setInput] = useState<string>('');
  const [chat, setChat] = useState<IChat[]>([]);

  // Handle the stream data from the api response
  const handleStream = async (data: ReadableStream, chatHistory: IChat[]) => {
    setChat(chatHistory);

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let streamData = '';

    const lastChatIndex = chatHistory.length;

    // Append the stream data to the contentData state as it arrives
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;

      if (value) {
        const chunkValue = decoder.decode(value);
        streamData += chunkValue;
      }

      // Update the last chat message with the new answer
      if (lastChatIndex >= 0) {
        setChat((prev) => {
          const updatedPrev = [...prev];
          updatedPrev[lastChatIndex] = { role: 'assistant', content: streamData };
          return updatedPrev;
        });
      }
    }
  };

  // Function to make api call for getting the chat response
  const handleChatFn = async (formData: FormData) => {
    const question = formData.get('question') as string;

    try {
      const response = await fetch('/api/ai-modules/multillm-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: chatModel,
          question,
          history: chat,
        }),
      });

      if (!response.ok) {
        errorToast('Failed to get message response from the server. Please try again.');
        return;
      }

      if (!response.body) {
        errorToast('Message not found in the response. Please try again.');
        return;
      }

      setInput('');

      const chatHistory = [...chat, { role: 'user', content: question }];

      // Handle the stream data
      await handleStream(response.body, chatHistory);
    } catch (error) {
      errorToast(`${error}`);
    }
  };

  return (
    <div className='max-w-3xl mx-auto p-4'>
      <h1 className='text-xl font-semibold mb-8'>MultiLLm ChatGPT</h1>

      {/* This component allows user to select among different available models */}
      <Select defaultValue={chatModel} onValueChange={(value) => setChatModel(value)}>
        <SelectTrigger className='w-28 rounded-lg bg-accent mb-4 md:mb-0'>
          <SelectValue />
        </SelectTrigger>

        <SelectContent>
          {modelOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <div className='h-[calc(100vh-150px)] flex flex-col justify-end rounded-md mx-auto'>
        {/* Show this section if there is no chat yet */}
        {chat.length == 0 && (
          <div className='flex flex-col items-center text-sm text-center mb-40'>
            <PiChatsLight size={32} className='mb-2' />
            <p className='font-medium mb-6'>What to ask</p>
            <div className='flex flex-col items-center gap-2 text-muted-foreground'>
              <p className='w-full px-2 py-1 rounded-lg bg-muted/60'>
                "Explain quantum computing in simple terms"
              </p>
              <p className='w-full px-2 py-1 rounded-lg bg-muted/60'>
                "Got any creative ideas for a 10-year-old's birthday?"
              </p>
              <p className='w-full px-2 py-1 rounded-lg bg-muted/60'>
                "How do I make an HTTP request in JavaScript?"
              </p>
            </div>
          </div>
        )}

        {/* Display chat section */}
        <div className='py-10 overflow-y-scroll'>
          {chat.map((chat, index) => (
            <div key={index} className='max-w-xl w-fit flex items-start gap-2 mb-4'>
              <div className='w-fit rounded-md bg-muted/60'>
                {chat.role === 'user' ? (
                  <div className='p-3'>
                    <p className='text-sm font-medium uppercase'>Bk</p>
                  </div>
                ) : (
                  <div className='p-2'>
                    <RiMessage2Fill className='size-7 text-blue-500' />
                  </div>
                )}
              </div>
              <div
                className={cn(
                  'text-sm whitespace-break-spaces rounded-md p-3',
                  chat.role === 'user'
                    ? 'w-5/6 md:w-full text-white bg-blue-600'
                    : 'text-accent-foreground/70 bg-muted/60'
                )}>
                {chat.role === 'user' ? (
                  <p>{chat.content}</p>
                ) : (
                  <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeHighlight]}>
                    {chat.content}
                  </ReactMarkdown>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Form to ask questions */}
        <form className='w-full flex items-center gap-2 text-foreground'>
          <Input
            name='question'
            placeholder='Ask here...'
            autoFocus
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className='h-10 border shadow-sm'
          />
          <SubmitButton size='icon' formAction={handleChatFn} isCircleLoader={true} className='size-10'>
            <LuSend size={16} />
          </SubmitButton>
        </form>
      </div>
    </div>
  );
};

export default MultiLLmChatGPT;
