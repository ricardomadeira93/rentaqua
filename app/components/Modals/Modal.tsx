'use client';
import {
  useCallback,
  useEffect,
  useState,
} from 'react';

import { IoMdClose } from 'react-icons/io';
import Button from '../Button';

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
  secondaryAction?: () => void;
  secondaryActionLabel?: string;
}

const Modal: React.FC<ModalProps> = ({
  secondaryAction,
  onClose,
  onSubmit,
  isOpen,
  disabled,
  title,
  body,
  footer,
  actionLabel,
  secondaryActionLabel,
}) => {
  const [showModal, setShowModal] =
    useState(isOpen);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }

    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose, disabled]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }

    onSubmit();
  }, [onSubmit, disabled]);

  const handleSecondaryAction =
    useCallback(() => {
      if (disabled || !secondaryAction) {
        return;
      }

      secondaryAction();
    }, [secondaryAction, disabled]);

  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-accent/70'>
        <div className='relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 y-6 mx-auto h-full lg:h-auto md:h-auto'>
          <div
            className={`translate duration-300 h-full 
            ${
              showModal
                ? 'translate-y-0'
                : 'translate-y-full'
            }
            ${
              showModal
                ? 'opacity-100'
                : 'opacity-0'
            }
            `}
          >
            <div className='translate h-full lg:h-auto md:h-auto border-0 ronded-lg shadow-lg relative flex flex-col w-full bg-background outline-none focus:outline-none'>
              <div className='items-center flex p-6 rounded-t justify-center relative border-b-[1px]'>
                <button
                  onClick={handleClose}
                  className='p-1 border-0 hover:opacity-70 transition absolute left-9'
                >
                  <IoMdClose size={20} />
                </button>
                <div className='text-lg font-semibold '>
                  {title}
                </div>
              </div>
              <div className='p-6 relative flex-auto'>
                {body}
              </div>
              <div className='flex flex-col p-6 gap-2'>
                <div className='flex flex-row items-center gap-4 w-full'>
                  {secondaryAction &&
                    secondaryActionLabel && (
                      <Button
                        outline
                        onClick={handleSubmit}
                        disabled={disabled}
                        label={
                          secondaryActionLabel
                        }
                      />
                    )}
                  <Button
                    onClick={handleSubmit}
                    disabled={disabled}
                    label={actionLabel}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
