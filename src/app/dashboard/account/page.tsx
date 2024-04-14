import InputWrapper from '@/components/InputWrapper';
import PopoverLocationInfo from '@/components/dashboard/account/PopoverLocationInfo';
import { Input } from '@/components/ui/input';
import { SubmitButton } from './SubmitButton';

export default async function Account() {
  const handleAccountUpdate = async (formData: FormData) => {
    'use server';

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const location = formData.get('location') as string;

    // Code to store the account details in the database
    console.log({ firstName, lastName, email, location });
  };

  return (
    <div className='p-8 space-y-10'>
      <div className='space-y-1 text-secondary'>
        <p className='text-2xl font-medium'>Account Settings</p>
        <p>Access and Manage Your Personal Details, Contracts, and Wallet Address</p>
      </div>

      <form>
        <div className='md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-14 gap-y-6'>
          <InputWrapper id='firstName' label='First Name'>
            <Input id='firstName' name='firstName' placeholder='John' className='h-10' />
          </InputWrapper>
          <InputWrapper id='lastName' label='Last Name'>
            <Input id='lastName' name='lastName' placeholder='Elahi' className='h-10' />
          </InputWrapper>
          <InputWrapper id='email' label='Email Address'>
            <Input id='email' name='email' placeholder='help@builderkit.ai' className='h-10' />
          </InputWrapper>
          <InputWrapper id='location' label='Location' infoPopover={<PopoverLocationInfo />}>
            <Input id='location' name='location' placeholder='India' className='h-10' />
          </InputWrapper>

          <SubmitButton className='w-full opacity-80' formAction={handleAccountUpdate}>
            Update Account
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
