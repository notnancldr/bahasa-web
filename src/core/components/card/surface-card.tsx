import React from 'react';

export interface SurfaceCardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  onClick?: () => void;
}

export const SurfaceCard: React.FC<SurfaceCardProps> = ({
  children,
  className = '',
  interactive = false,
  onClick,
}) => {
  const interactiveStyles = interactive
    ? 'cursor-pointer hover:border-[#5B93AE] transition-all duration-200'
    : '';

  return (
    <div
      onClick={onClick}
      className={`bg-[#FAFAF8] dark:bg-[#171F23] border border-[rgba(125,138,143,0.30)] rounded-3xl p-6 shadow-xs ${interactiveStyles} ${className}`}
    >
      {children}
    </div>
  );
};

