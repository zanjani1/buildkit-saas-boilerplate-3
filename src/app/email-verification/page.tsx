import InputWrapper from '@/components/InputWrapper';
import { Input } from '@/components/ui/input';
import config from '@/config';
import { sendMagicLink } from './actions';
import { redirect } from 'next/navigation';
import { SubmitButton } from '@/components/SubmitButton';

export default function EmailVerification({ searchParams }: { searchParams: { message: string } }) {
  //function to send the magicLink to the entered email
  const handleEmailVerification = async (formData: FormData) => {
    'use server';

    const email = formData.get('email') as string;
    if (!email) {
      redirect(`/email-verification?message=Invalid email`);
    }

    const response = await sendMagicLink(email);
    if (typeof response === 'string') {
      redirect(`/email-verification?message=${response}`);
    } else if (response.message) {
      redirect(`/email-verification?message=${response.message}`);
    }
  };

  return (
    <div className='h-screen flex'>
      <div className='w-full flex flex-col items-center justify-center px-6'>
        <h1 className='text-4xl font-medium mb-4'>{config.app.name}</h1>
        <h2 className='text-[#8F95B2] text-sm mb-12'>Verify your email</h2>

        <div className='w-full sm:max-w-md flex flex-col gap-8 items-center'>
          <form className='w-full flex flex-col justify-center gap-8 text-foreground mt-2'>
            <InputWrapper id='email' label='Enter your email:'>
              <Input id='email' name='email' placeholder='hello@gmail.com' required className='h-10' />
            </InputWrapper>

            <SubmitButton className='h-10' formAction={handleEmailVerification}>
              Send Magic Link
            </SubmitButton>
          </form>

          {searchParams?.message && (
            <p className='w-full mt-4 p-4 bg-muted text-sm text-center rounded-md'>{searchParams.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}
