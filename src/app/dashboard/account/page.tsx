import Heading from '@/components/Heading';
import InputWrapper from '@/components/InputWrapper';
import { Input } from '@/components/ui/input';
import React from 'react';
import { IoIosInformationCircle } from 'react-icons/io';

const page = () => {
  return (
    <div className='p-8 space-y-8'>
      <div className='text-[#363A4E] text-2xl  not-italic font-semibold leading-7 tracking-[-0.48px];'>
        Account Settings
      </div>
      <Heading
        headerClassName='text-[#363A4E] font-semibold text-lg'
        paragraphClassName='text-[#5A607D] font-medium'
        title='Account details'
        description='Access and Manage Your Personal Details, Contracts, and Wallet Address'
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <InputWrapper id='firstName' label='First Name'>
          <Input id='firstName' name='firstName' placeholder='Username' />
        </InputWrapper>
        <InputWrapper id='lastName' label='Last Name'>
          <Input id='lastName' name='lastName' placeholder='Username' />
        </InputWrapper>
        <InputWrapper id='email' label='Email Address'>
          <Input id='email' name='email' placeholder='genai@labs.com' />
        </InputWrapper>
        <InputWrapper id='location' label='Location' className="">
          <Input id='location' name='location' placeholder='Where are you based at..' />
          <div className='flex border border-[#E4E6EA] bg-[#FCFCFC] rounded-md items-start gap-2 p-3 mt-2'>
            <IoIosInformationCircle className='text-[#6B7280] text-lg' size={22} />{' '}
            <p>Please note that updating your location could affect your tax rates.</p>{' '}
          </div>
        </InputWrapper>
      </div>
    </div>
  );
};

export default page;
