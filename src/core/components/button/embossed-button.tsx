import React from 'react';

export interface EmbossedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'neutral' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const EmbossedButton: React.FC<EmbossedButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  className = '',
  disabled,
  ...props
}) => {
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs gap-1.5 font-bold',
    md: 'px-5 py-2.5 text-sm gap-2 font-bold',
    lg: 'px-7 py-3 text-base gap-2.5 font-extrabold',
  }[size];

  const variantClass = {
    primary: 'btn-embossed-primary',
    secondary: 'btn-embossed-secondary',
    neutral: 'btn-embossed-neutral',
    outline:
      'border-[1.5px] border-[rgba(125,138,143,0.30)] bg-transparent text-[#2F3A3F] dark:text-[#E8EFF1] hover:bg-[rgba(125,138,143,0.10)] active:translate-y-[1px]',
  }[variant];

  const disabledStyles = disabled
    ? 'opacity-50 cursor-not-allowed pointer-events-none'
    : 'cursor-pointer';

  // `rounded-full` HERE IS NOT SLOP, IT'S A PART OF DESIGN STYLE FOR BASA APP
  // DONT OEVERWRITE `rounded-full` FOR `EmbossedButton`
  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center rounded-full select-none transition-all ${sizeStyles} ${variantClass} ${disabledStyles} ${className}`}
      {...props}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

