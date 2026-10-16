import React from 'react';
import { DeckDifficulty } from '../../../domain/entities/euy-deck.entity';

export interface DifficultyBadgeProps {
  difficulty: DeckDifficulty;
  className?: string;
}

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ difficulty, className = '' }) => {
  const config = {
    beginner: {
      label: 'Beginner',
      bg: 'bg-[#FFD3B0]/25 text-[#2F3A3F] dark:text-[#FFD3B0] border-[#FFD3B0]/40',
    },
    intermediate: {
      label: 'Intermediate',
      bg: 'bg-[#C9B6E4]/25 text-[#2F3A3F] dark:text-[#C9B6E4] border-[#C9B6E4]/40',
    },
    expert: {
      label: 'Expert',
      bg: 'bg-[#A9D6E5]/25 text-[#5B93AE] dark:text-[#A9D6E5] border-[#5B93AE]/30',
    },
  }[difficulty];

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold border capitalize ${config.bg} ${className}`}
    >
      {config.label}
    </span>
  );
};

