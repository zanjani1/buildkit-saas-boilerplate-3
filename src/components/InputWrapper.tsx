// This component serves as a flexible wrapper for various form elements, providing consistent styling and behavior.
// It supports labeling, optional comments, descriptions, and error handling.

import { cn } from '@/utils/utils';
import { ReactNode } from 'react';
import { FC } from 'react';
import { MdErrorOutline } from 'react-icons/md';

// Props:
// `id` - optional, associates the label with an input element for accessibility.
// `label` - optional, the text label displayed for the input field.
// `comment` - optional, a lighter, smaller text used to add additional information about the field.
// `description` - optional, displays additional details or guidelines below the input field.
// `infoPopover` - optional, can be used to provide context-sensitive help or additional information in a popover.
// `error` - optional, displays an error message and an icon if there is an error related to the input field.
// `children` - optional, the input elements or components that the wrapper will encapsulate.
// `extraOption` - optional, allows for an additional interactive element (like a button) to be placed next to the label.
// `className` - optional, allows for custom styling by adding additional CSS classes.

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
          {/* Displays extra options, aligning them with the label. Mostly Icons to be shown before the Label. */}
          {extraOption && <div className='w-4'>{extraOption}</div>}
          <div className='flex items-end gap-1 w-full'>
            {/* Display the label text with small font size. */}
            {label && <p className={cn('text-sm leading-none')}>{label}</p>}
            {/* Comment text displayed next to the label. */}
            {comment && <p className='text-xs font-light text-gray-500'>({comment})</p>}
            {/* Info popover icon or component positioned on the far right. */}
            {infoPopover && <div className='ml-auto h-4'>{infoPopover}</div>}
          </div>
        </label>
      </div>
      {/* Placeholder for form elements like input, textarea, etc. */}
      {children}
      {/* Description displayed below the children. */}
      {description && <div className='text-xs font-light text-gray-500 mt-1'>{description}</div>}
      {/* Handles error message to be shown for the specified input */}
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

// Usage:
// Use <InputWrapper> to encapsulate various form elements like <input>, <select>, or <textarea>,
// providing them with common styling and structural elements.
// Example: Place an <input type="text"/> inside <InputWrapper> to automatically handle labeling, errors, and descriptions.
