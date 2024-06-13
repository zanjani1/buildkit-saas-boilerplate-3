// This is Content Writer component that allows users to generate content based on the given inputs.

'use client';

import { SubmitButton } from '@/components/SubmitButton';
import { FC, useState } from 'react';
import { toast } from '@/components/ui/use-toast';
import { errorToast } from '@/utils/utils';
import React from 'react';
import { IoMdCopy } from 'react-icons/io';
import MachinLerningIcon from '@/assets/ai-modules/icons/MachinLerningIcon';
import InputWrapper from '@/components/InputWrapper';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';

interface ContentWriterProps {}

type FormFields = {
  topic: string;
  style: string;
  wordLimit: string;
  tone: string;
  language: string;
};

const outputLanguages = ['English', 'Mandarin', 'Hindi', 'Spanish', 'French', 'Portuguese', 'Urdu'];

const initialFormData: FormFields = {
  topic: '',
  style: '',
  wordLimit: '',
  tone: '',
  language: outputLanguages[0],
};

const ContentWriter: FC<ContentWriterProps> = () => {
  const [contentData, setContentData] = useState<{ title: string; description: string }[]>();
  const [formData, setFormData] = useState<FormFields>(initialFormData);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handles the streaming of content generation data from the server response
  const handleStream = async (data: ReadableStream) => {
    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;
    let streamData = '';

    // Append the stream data to the contentData state as it arrives
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      streamData += chunkValue;
    }

    if (done && streamData) {
      const parsedData = JSON.parse(streamData);
      setContentData(parsedData.content);
    }
  };

  const handleGeneration = async () => {
    const { topic, style, wordLimit, tone, language } = formData;

    if (!topic || !style || !wordLimit || !tone || !language) {
      errorToast('Please fill all required fields');
      return;
    }

    // Makes an api call to /api/ai-modules/content-writer and receives a stream response
    const res = await fetch('/api/ai-modules/content-writer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      errorToast('Something went wrong, please try again');
      return;
    }

    const data = res.body;
    if (!data) {
      errorToast('Something went wrong, please try again');
      return;
    }

    // Handle the stream data
    await handleStream(data);
  };

  return (
    <div className='max-w-6xl mx-auto p-4'>
      <h1 className='text-xl font-semibold mt-4 mb-14'>Content Creator Tool</h1>

      <div className='block md:flex items-start space-y-10 md:space-y-0'>
        <div className='w-full md:w-2/5 mr-0 md:mr-8'>
          <form className='space-y-4 md:space-y-6'>
            <InputWrapper id='topic' label='What do you want to generate?' className='mb-3'>
              <Input
                id='topic'
                name='topic'
                placeholder='AI news show'
                autoFocus
                value={formData.topic}
                onChange={handleInputChange}
              />
            </InputWrapper>

            <InputWrapper id='wordLimit' label='Word Limit' className='mb-3'>
              <Input
                id='wordLimit'
                name='wordLimit'
                placeholder='120'
                value={formData.wordLimit}
                onChange={handleInputChange}
              />
            </InputWrapper>

            <InputWrapper id='style' label='Style' className='mb-3'>
              <Input
                id='style'
                name='style'
                placeholder='Educational, Facts, Entertainment'
                value={formData.style}
                onChange={handleInputChange}
              />
            </InputWrapper>

            <InputWrapper id='tone' label='Tone' className='mb-3'>
              <Input
                id='tone'
                name='tone'
                placeholder='Informal, Casual, Professional, Friendly, etc.'
                value={formData.tone}
                onChange={handleInputChange}
              />
            </InputWrapper>

            <InputWrapper id='language' label='Output Language' className='mb-3'>
              <Select
                value={formData.language}
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    language: value,
                  }))
                }>
                <SelectTrigger className='mb-4 md:mb-0'>
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  {outputLanguages.map((option, index) => (
                    <SelectItem key={index} value={option}>
                      {option}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </InputWrapper>

            <div className='flex gap-2'>
              <SubmitButton className='w-full' formAction={handleGeneration}>
                Generate
              </SubmitButton>

              {contentData != null && (
                <Button
                  type='button'
                  variant='destructive'
                  className='w-full'
                  onClick={() => setFormData(initialFormData)}>
                  Reset
                </Button>
              )}
            </div>
          </form>
        </div>

        <div className='w-full md:w-3/5 pl-0 md:pl-8 md:border-l border-[#ECECEC]'>
          {contentData == null && (
            <p className='text-base font-medium text-center mb-16 text-input-title'>
              Your output will be displayed here
            </p>
          )}

          {contentData == null ? (
            <div className='flex justify-center'>
              <MachinLerningIcon />
            </div>
          ) : (
            <div className='space-y-5 overflow-auto max-h-[calc(100vh-200px)]'>
              {contentData.map((content, index) => (
                <div key={index} className='border border-[#EEE] p-4 rounded-lg'>
                  <div className='flex justify-between items-start'>
                    <p className='font-medium text-[#333333] mb-2'>{content.title}</p>

                    <IoMdCopy
                      className='size-6 p-1 rounded border text-lp7-secondary border-[#EEE] cursor-pointer'
                      onClick={() => {
                        navigator.clipboard.writeText(`${content.title}\n${content.description}`).then(() => {
                          toast({ title: 'Content copied to clipboard' });
                        });
                      }}
                    />
                  </div>
                  <p className='text-sm text-[#4B5563]'>{content.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContentWriter;
