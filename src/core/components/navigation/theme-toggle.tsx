import { Moon, Sun } from 'lucide-react';
import React from 'react';
import { useTheme } from '../../theme/use-theme';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="p-2 rounded-lg border border-[rgba(125,138,143,0.30)] bg-[#FAFAF8] dark:bg-[#171F23] text-[#2F3A3F] dark:text-[#E8EFF1] hover:border-[#5B93AE] transition-colors cursor-pointer shadow-xs inline-flex items-center justify-center"
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-[#FFD59E]" />
      ) : (
        <Moon className="w-4 h-4 text-[#2F3A3F]" />
      )}
    </button>
  );
};
