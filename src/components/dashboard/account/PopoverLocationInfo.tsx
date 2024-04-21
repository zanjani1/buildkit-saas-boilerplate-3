// This component is a popover used to provide additional information about the location field in a form.
// It utilizes a reusable popover component from '@/components/ui/popover' and an information icon from 'react-icons/io'.

import { FC } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { IoMdInformationCircle } from 'react-icons/io';

interface PopoverLocationInfoProps {}

const PopoverLocationInfo: FC<PopoverLocationInfoProps> = () => {
  return (
    <Popover>
      <PopoverTrigger className='p-0'>
        <IoMdInformationCircle className='text-[#6B7280] cursor-pointer' />
      </PopoverTrigger>
      <PopoverContent side='top' className='bg-[#FCFCFC] text-[#6B7280] p-2 w-72 md:w-80 mr-4 md:mr-0'>
        <p className='text-sm text-center'>
          Please note that updating your location could affect your tax rates.
        </p>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverLocationInfo;
