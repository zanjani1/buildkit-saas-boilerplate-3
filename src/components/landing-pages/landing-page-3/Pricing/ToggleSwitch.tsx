import React from 'react';
import clsx from 'clsx';

interface ToggleSwitchProps {
  isToggled: boolean;
  setIsToggled: (value: boolean) => void;
}

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ isToggled, setIsToggled }) => {
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div
      onClick={handleToggle}
      className={clsx(
        'cursor-pointer md:w-16 md:h-9 w-14 h-7 p-1 rounded-full md:p-2 transition-colors duration-100 ease-in-out',
        {
          'bg-[#009429]': isToggled,
          'bg-gray-400': !isToggled,
        }
      )}>
      <div
        className={clsx(
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
