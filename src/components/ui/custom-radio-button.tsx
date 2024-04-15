import React, { useState, useEffect } from 'react';

// Define Option interface
interface Option {
  value: string;
  label: string;
}

// Define Props interface for CustomRadioButton component
interface CustomRadioButtonProps {
  options: Option[];
  selectedValue?: string;
  onChange: (selectedValue: string | undefined) => void; // Changed parameter name to be more descriptive
}

// CustomRadioButton component
const CustomRadioButton: React.FC<CustomRadioButtonProps> = ({ options, selectedValue, onChange }) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>(selectedValue); // Changed variable name for clarity

  useEffect(() => {
    setSelectedOption(selectedValue);
  }, [selectedValue]);

  const handleOptionChange = (optionValue: string) => {
    setSelectedOption(optionValue);
    onChange(optionValue === selectedOption ? undefined : optionValue); // Simplified logic to toggle between selected option and undefined
  };

  return (
    <div className='flex'>
      {options.map((option, index) => (
        <button
          key={option.value}
          className={`py-1 px-4 w-auto md:w-36 ${
            selectedOption === option.value
              ? 'bg-[#1463FF] text-white'
              : 'bg-white text-[#363A4E] border border-[#E4E6EA]'
          } ${index === 0 ? 'rounded-l' : ''} ${index === options.length - 1 ? 'rounded-r' : ''}`}
          onClick={() => handleOptionChange(option.value)}>
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default CustomRadioButton;
