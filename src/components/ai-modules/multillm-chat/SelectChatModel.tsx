// Code for selecting the chat model for the chatbot

import { FC } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Available chat models
export const modelOptions = [
  {
    value: 'gpt-35',
    label: 'GPT-3.5',
  },
  {
    value: 'gpt-4',
    label: 'GPT-4',
  },
  {
    value: 'claude',
    label: 'Claude',
  },
  {
    value: 'mistral',
    label: 'Mistral',
  },
  {
    value: 'llama-2',
    label: 'Llama 2',
  },
];

interface SelectChatModelProps {
  defaultModel: string;
  onSelect: (value: string) => void;
}

const SelectChatModel: FC<SelectChatModelProps> = ({ defaultModel, onSelect }) => {
  return (
    <Select defaultValue={defaultModel} onValueChange={onSelect}>
      <SelectTrigger className='w-28 rounded-lg bg-accent mb-4 md:mb-0'>
        <SelectValue />
      </SelectTrigger>

      <SelectContent>
        {modelOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default SelectChatModel;
