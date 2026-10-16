import React from 'react';

export type CategoryBadgeColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'warning'
  | 'neutral'
  | 'cyan'
  | 'peach'
  | 'lavender'
  | 'emerald';

export interface CategoryBadgeProps {
  color?: CategoryBadgeColor;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export const CategoryBadge: React.FC<CategoryBadgeProps> = ({
  color = 'primary',
  children,
  icon,
  className = '',
}) => {
  const colorStyles: Record<CategoryBadgeColor, string> = {
    primary:
      'bg-[#A9D6E5]/20 text-[#5B93AE] dark:text-[#A9D6E5] border border-[#5B93AE]/30',
    cyan:
      'bg-[#A9D6E5]/20 text-[#5B93AE] dark:text-[#A9D6E5] border border-[#5B93AE]/30',
    secondary:
      'bg-[#FFD3B0]/25 text-[#2F3A3F] dark:text-[#FFD3B0] border border-[#FFD3B0]/40',
    peach:
      'bg-[#FFD3B0]/25 text-[#2F3A3F] dark:text-[#FFD3B0] border border-[#FFD3B0]/40',
    accent:
      'bg-[#C9B6E4]/25 text-[#2F3A3F] dark:text-[#C9B6E4] border border-[#C9B6E4]/40',
    lavender:
      'bg-[#C9B6E4]/25 text-[#2F3A3F] dark:text-[#C9B6E4] border border-[#C9B6E4]/40',
    warning:
      'bg-[#FFD59E]/25 text-[#2F3A3F] dark:text-[#FFD59E] border border-[#FFD59E]/40',
    neutral:
      'bg-[rgba(125,138,143,0.12)] text-[#2F3A3F] dark:text-[#E8EFF1] border border-[rgba(125,138,143,0.30)]',
    emerald:
      'bg-[#A9D6E5]/20 text-[#5B93AE] dark:text-[#A9D6E5] border border-[#5B93AE]/30',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold tracking-wide uppercase ${colorStyles[color]} ${className}`}
    >
      {icon && <span className="inline-flex shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

