import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen flex flex-col items-center gap-6 mt-20'>
      <h1 className='text-4xl'>Error 404!</h1>
      <h2 className='text-2xl'>Not Found</h2>
      <Link href='/' className='underline px-4 py-1'>
        Go to Home
      </Link>
    </div>
  );
}
