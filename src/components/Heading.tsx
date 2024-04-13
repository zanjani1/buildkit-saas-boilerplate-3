import { cn } from '@/utils/utils';
import React from 'react';

interface HeadingProps {
  className?: string;
  headerClassName?: string;
  paragraphClassName?: string;
  title: string;
  description: string;
}

const Heading: React.FC<HeadingProps> = ({
  className,
  headerClassName,
  paragraphClassName,
  title,
  description,
}) => {
  return (
    <div className={cn('space-y-2', className)}>
      <h1 className={cn('', headerClassName)}>{title}</h1>
      <p className={cn('text-gray-600', paragraphClassName)}>{description}</p>
    </div>
  );
};

export default Heading;
