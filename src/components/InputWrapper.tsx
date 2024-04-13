import { cn } from '@/utils/utils';
import { ReactNode } from 'react';
import { FC } from 'react';
import { MdErrorOutline } from 'react-icons/md';

interface InputWrapperProps {
  id?: string;
  label?: string;
  comment?: string;
  description?: string;
  infoPopover?: ReactNode;
  error?: string;
  children?: ReactNode;
  extraOption?: ReactNode;
  className?: string | string[];
}

const InputWrapper: FC<InputWrapperProps> = ({
  id,
  label,
  comment,
  description,
  infoPopover,
  error,
  children,
  extraOption,
  className,
}) => {
  return (
    <div className={cn('w-full relative', className)}>
      <div className='mb-2'>
        <label htmlFor={id} className='flex items-end gap-1 mb-1'>
          {extraOption && <div className='w-4'>{extraOption}</div>}
          <div className='flex items-end gap-1 w-full'>
            {label && <p className={cn('text-sm leading-none')}>{label}</p>}
            {comment && <p className='text-xs font-light text-gray-500'>({comment})</p>}
            {infoPopover && <div className='ml-auto h-4'>{infoPopover}</div>}
          </div>
        </label>
      </div>
      {children}
      {description && <div className='text-xs font-light text-gray-500 mt-1'>{description}</div>}
      {error && (
        <div className='text-xs mt-1 text-red-500 flex items-center gap-1.5'>
          <MdErrorOutline />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default InputWrapper;
