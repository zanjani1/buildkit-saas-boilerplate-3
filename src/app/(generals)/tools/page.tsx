import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

const toolUrls = [
  {
    name: 'Interior Design Generator',
    url: 'https://aib-interior-design.vercel.app/generate',
  },
  {
    name: 'Headshot Geenrator',
    url: 'https://aib-headshot-generator.vercel.app/generate',
  },
  {
    name: 'Qr Code Generator',
    url: 'https://aib-qr-code-generation.vercel.app/generate',
  },
  {
    name: 'Text to Image Generation',
    url: 'https://aib-image-generation.vercel.app/generate',
  },
  {
    name: 'Voice Transcription & Summary',
    url: 'https://aib-voice-transcription.vercel.app/generate',
  },
  {
    name: 'Content Writer',
    url: 'https://aib-content-writer.vercel.app/generate',
  },
];

export default async function Tools() {
  return (
    <div className='max-w-6xl mx-auto p-4 my-10'>
      <h1 className='text-3xl font-semibold mb-6'>Demo 🛠️</h1>

      <div className='grid md:grid-cols-2 gap-6 mb-10'>
        {toolUrls.map((tool, index) => (
          <Card key={index}>
            <CardContent className='py-6'>
              <Link href={tool.url} target='_blank'>
                <div className='w-full h-72 rounded-lg bg-slate-700'></div>
              </Link>
              <p className='text-xl font-semibold mt-4 leading-none'>{tool.name}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
