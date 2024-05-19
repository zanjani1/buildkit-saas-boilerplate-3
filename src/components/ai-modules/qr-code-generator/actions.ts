'use server';

import Replicate from 'replicate';

const replicate = new Replicate();

// This function expects formData with 'url' and 'prompt' fields and generates a QR code if the user is authenticated.
// It utilizes getUserDetails and supabaseServerClient from '@/utils/supabase/server' for user session and database management.
export async function generateQrCodeFn(formData: FormData) {
  try {
    const url = formData.get('url') as string;
    const prompt = formData.get('prompt') as string;

    if (!prompt || !url) {
      throw 'Missing required fields.';
    }

    const output = await replicate.run(
      'zylim0702/qr_code_controlnet:628e604e13cf63d8ec58bd4d238474e8986b054bc5e1326e50995fdbc851c557',
      {
        input: {
          url,
          prompt,
          qr_conditioning_scale: 2,
          num_inference_steps: 30,
          guidance_scale: 5,
          negative_prompt:
            'Longbody, lowres, bad anatomy, bad hands, missing fingers, extra digit, fewer digits, cropped, worst quality, low quality, blurry',
        },
      }
    );

    if (!output) {
      throw new Error('Failed to generate QR code');
    }

    return { imageUrl: (output as string[])[0] };
  } catch (error) {
    return `${error}`;
  }
}
