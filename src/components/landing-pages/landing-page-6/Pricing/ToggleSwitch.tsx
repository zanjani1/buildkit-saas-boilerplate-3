import { cn } from '@/utils/utils';
import { FC } from 'react';

interface ToggleSwitchProps {
  isToggled: boolean;
  handleToggle: () => void;
}

const ToggleSwitch: FC<ToggleSwitchProps> = ({ isToggled, handleToggle }) => {
  return (
    <div
      onClick={handleToggle}
      className={cn(
        'cursor-pointer md:w-16 md:h-9 w-14 h-7 p-1 rounded-full md:p-2 transition-colors duration-100 ease-in-out',
        {
          'bg-[#009429]': isToggled,
          'bg-gray-400': !isToggled,
        }
      )}>
      <div
        className={cn(
          'bg-white size-5 rounded-full transition-transform duration-300 ease-in-out pointer-events-none',
          {
            'translate-x-7': isToggled,
            'translate-x-0': !isToggled,
          }
        )}
      />
    </div>
  );
};

export default ToggleSwitch;
