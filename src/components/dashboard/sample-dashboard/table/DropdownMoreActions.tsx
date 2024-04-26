// This component handles the rendering of a dropdown menu with more actions for a table row.
// Currently it includes options to delete or edit an item.
// On clicking the delete or edit option, a modal dialog is displayed to confirm the action of the item.

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
          {/* Opens Delete Modal */}
          <Modal
            title='Delete Item'
            labelModalButton='Delete'
            labelActionButton='Delete'
            styleModalButton={{
              variant: 'ghost',
              className: 'justify-start text-red-500 hover:no-underline',
            }}
            actionButtonVariant='destructive'>
            <p>Are you sure you want to delete this item?</p>
          </Modal>

          {/* Opens Edit Modal */}
          <Modal
            title='Edit Item'
            labelModalButton='Edit'
            labelActionButton='Edit'
            styleModalButton={{
              variant: 'ghost',
              className: 'justify-start hover:no-underline',
            }}>
            <p>Are you sure you want to edit this item?</p>
          </Modal>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropdownMoreActions;
