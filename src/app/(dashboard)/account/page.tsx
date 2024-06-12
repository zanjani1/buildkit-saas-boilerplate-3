// This component handles the user account settings.
// The form allows users to update their personal details such as first name, last name, email, and location.
// The data is logged to the console, but you should replace this with actual API calls to update the database.

import InputWrapper from '@/components/InputWrapper';
import PopoverLocationInfo from '@/components/dashboard/account/PopoverLocationInfo';
import { Input } from '@/components/ui/input';
import { SubmitButton } from '../../../components/SubmitButton';

export default async function Account() {
  // This function is triggered when the user submits the form.
  // It collects data from the form and should contain logic to update these details in the backend.
  const handleAccountUpdate = async (formData: FormData) => {
    'use server';

    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const location = formData.get('location') as string;

    // Replace this console.log with your API call to store the account details in the database
    console.log({ firstName, lastName, email, location });
  };

  return (
    <div className='p-4 space-y-10'>
      <div className='space-y-1'>
        <p className='text-2xl font-medium'>Account Settings</p>
        <p className='text-secondary'>
          Access and Manage Your Personal Details, Contracts, and Wallet Address
        </p>
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
