import Link from 'next/link';

export default async function Home() {
  return (
    <div className='max-w-6xl mx-auto mt-10'>
      <h1 className='text-lg font-medium text-center mb-6'>Pages</h1>

      <div className='flex justify-center gap-12 text-sm'>
        <Link href='/login' className='hover:underline'>
          Login
        </Link>
      </div>
    </div>
  );
}
