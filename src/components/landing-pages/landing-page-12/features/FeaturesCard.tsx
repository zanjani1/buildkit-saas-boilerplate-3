import { FC } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const FeaturesCard: FC<CardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className='sticky top-20 md:top-32 rounded-[32px]'>
      <motion.div>
        <div className='flex flex-col md:flex-row items-center justify-between gap-6 bg-[#F6F6F6] rounded-[32px] p-4 md:pl-10'>
          <div className='w-full md:w-96 text-center md:text-start space-y-4'>
            <h3 className='text-3xl md:text-[40px] font-medium md:leading-[56px]'>{title}</h3>
            <p className='text-base md:text-lg md:leading-8 text-[#727272] font-light'>{description}</p>
          </div>

          <div className='bg-blue-600 rounded-3xl size-full md:w-[588px] md:h-[568px] flex items-center justify-center py-10 md:py-0'>
            <Image
              width={305}
              height={450}
              src={imageSrc}
              alt='Feature'
              className='w-[250px] h-[300px] md:w-[350px] md:h-[450px] rounded-3xl'
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FeaturesCard;
