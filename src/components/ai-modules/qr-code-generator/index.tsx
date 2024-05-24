// This is the QRCodeGenerator component that generates a QR code based on the user input.

'use client';

import { SubmitButton } from '@/app/(dashboard)/account/SubmitButton';
import InputWrapper from '@/components/InputWrapper';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';
import { FC, useState } from 'react';
import { generateQrCodeFn } from './actions';
import Image from 'next/image';
import { TbDownload } from 'react-icons/tb';
import { downloadQrCode } from '@/utils/utils';
import MachinLerningIcon from '@/assets/ai-modules/icons/MachinLerningIcon';

interface QRCodeGeneratorProps {}

type FormFields = {
  url: string;
  prompt: string;
};

const promptSuggestions = [
  'A thar desert',
  'A tropical paradise beach',
  'A misty mountain adventure',
  'An urban skyline view',
];

const blurImageDataUrl =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEXSURBVHgBVZDPSsNAEMa//dP8WVOheFToJejBKh7E4hMIXn0FwcfwrQSvPoFevFQUIdrE0NBTXRPTcbJrxc4yLHzz229nRtzd3lCy2YdJ+og5oyiG1hpSKwhICAEXWrGgdYBeEPLdg1TKp5AOEL8kaxqqc+Ci4tr8PcP11SUuzs/+IO/YAdq70HeLx4d7JIMBtmyNpq4RhKEHheQ+GArDCDGL6f4I6egQL08TlHmO7eHQg0RLgLgHfmCbBvOiwPQtg+2K/NMqZFM3WLYtiAgbxiCvKuzs7kGsBmETZ0RuIp6CtS+7wPHJGCaKYGLTkcz4o4/Gp8wIB05fn5FNuLfyA0VZIl0cwNpPtzZRzWYknDthPVj5J/0AA1VXn/cQBtkAAAAASUVORK5CYII=';

const QRCodeGenerator: FC<QRCodeGeneratorProps> = () => {
  const [imageUrl, setImageUrl] = useState<string>();
  const [formData, setFormData] = useState<FormFields>({ url: '', prompt: '' });

  // This function update the state of the form fields on input change.
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // It triggers the QR code generation process and updates the imageUrl state on success.
  const handleGeneration = async (data: FormData) => {
    const response = await generateQrCodeFn(data);
    if (typeof response == 'string') {
      toast({ description: response, variant: 'destructive' });
    } else {
      setImageUrl(response.imageUrl);
    }
  };

  return (
    <div className='max-w-6xl mx-auto p-4'>
      <h1 className='text-xl font-semibold mt-4 mb-14'>QR Code Generator Tool</h1>

      <div className='block md:flex items-start justify-between space-y-10 md:space-y-0'>
        <div className='w-full md:w-2/5 mr-0 md:mr-8'>
          <form className='flex flex-col gap-20'>
            {/* Uses custom InputWrapper, SubmitButton, and other UI components for styled inputs and button. */}
            <div className='flex flex-col gap-6'>
              <InputWrapper id='url' label='Url'>
                <Input
                  id='url'
                  name='url'
                  placeholder='builderkit.ai'
                  autoFocus
                  value={formData.url}
                  onChange={handleInputChange}
                />
              </InputWrapper>

              <InputWrapper
                id='prompt'
                label='Prompt'
                description='This is what the image in your QR code will look like.'>
                <Textarea
                  id='prompt'
                  name='prompt'
                  placeholder='Enter your prompt here'
                  rows={3}
                  value={formData.prompt}
                  onChange={handleInputChange}
                />
              </InputWrapper>

              <InputWrapper label='Prompt suggestions'>
                <div className='grid lg:grid-cols-2 gap-3'>
                  {promptSuggestions.map((prompt, index) => (
                    <Button
                      key={index}
                      type='button'
                      variant='outline'
                      className='font-normal  rounded-xl'
                      onClick={() => setFormData({ ...formData, prompt })}>
                      {prompt}
                    </Button>
                  ))}
                </div>
              </InputWrapper>
            </div>

            <SubmitButton className='w-full rounded-xl' formAction={handleGeneration}>
              Generate
            </SubmitButton>
          </form>
        </div>

        <div className='h-full border border-black/5 rounded-lg px-5 py-4 overflow-auto'>
          {imageUrl == null ? (
            <div className='flex justify-center'>
              <MachinLerningIcon />
            </div>
          ) : (
            <div className='relative group'>
              <Image
                src={imageUrl}
                alt=''
                width={512}
                height={512}
                className='border rounded-md mx-auto'
                placeholder='blur'
                blurDataURL={blurImageDataUrl}
              />
              <div className='absolute inset-0 bg-black/30  flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                <Button
                  variant='secondary'
                  onClick={() => downloadQrCode(imageUrl, 'qr-code.png')}
                  className='rounded-full'>
                  <TbDownload className='mr-2' />
                  Download
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
