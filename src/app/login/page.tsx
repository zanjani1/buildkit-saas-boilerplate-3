import EmailAuth from '@/components/auth/EmailAuth';
import GoogleAuth from '@/components/auth/GoogleAuth';
import config from '@/config';

export default function Login() {
  return (
    <div className='h-screen flex'>
      <div className='w-full flex flex-col items-center justify-center px-6'>
        <h1 className='text-4xl font-medium mb-4'>{config.app.name}</h1>
        <h2 className='text-[#8F95B2] text-sm mb-12'>Login or register with your email</h2>

        <div className='w-full sm:max-w-md flex flex-col gap-8 items-center'>
          <GoogleAuth />
          <hr className='w-full bg-[#CDCDCD]' />
          <EmailAuth />
        </div>
      </div>
    </div>
  );
}
