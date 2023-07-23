'use client';

import { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  onCLick: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  label,
  onCLick,
  disabled,
  outline,
  small,
  icon,
}) => {
  return (
    <button
      className={`relative  disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full

      ${outline ? 'bg-background' : 'bg-primary'}
      ${outline? 'border-black': 'border-primary'}
      ${outline ? 'text-text' : 'text-white'}
      ${small ? 'py-1' : 'py-3'}
      ${small ? 'text-sm' : 'text-md'}
      ${small ? 'font-ligh' : 'font-semibold'}
      ${small ? 'border-[1px]' : 'border-2'}
      
      `}
    >
      {label}
    </button>
  );
};

export default Button;
