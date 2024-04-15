import { FC } from 'react';
import { IoIosMore } from 'react-icons/io';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import Modal from '@/components/Modal';

interface DropdownMoreActionsProps {}

const DropdownMoreActions: FC<DropdownMoreActionsProps> = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <IoIosMore />
      </DropdownMenuTrigger>

      <DropdownMenuContent align='end'>
        <div className='w-full '>
          <Modal
            title='Delete Item'
            labelModalButton='Delete'
            labelActionButton='Delete'
            styleModalButton={{
              variant: 'link',
              className: 'text-red-500 hover:no-underline',
            }}
            actionButtonVariant='destructive'>
            <p>Are you sure you want to delete this item?</p>
          </Modal>
          <Modal
            title='Edit Item'
            labelModalButton='Edit'
            labelActionButton='Edit'
            styleModalButton={{
              variant: 'link',
              className: 'hover:no-underline',
            }}>
            <p>Are you sure you want to edit this item?</p>
          </Modal>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMoreActions;
