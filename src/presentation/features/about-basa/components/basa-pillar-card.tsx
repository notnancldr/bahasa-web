import React from 'react';
import { MaterialShapeType } from '../../../../core/components/shape/material-shape';
import { ShapeFrame } from '../../../../core/components/shape/shape-frame';

export interface BasaPillarCardProps {
  shapeType: MaterialShapeType;
  shapeFill: string;
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
}

export const BasaPillarCard: React.FC<BasaPillarCardProps> = ({
  shapeType,
  shapeFill,
  icon,
  number,
  title,
  description,
}) => {
  return (
    <div className="relative group flex flex-col justify-between pt-6 border-t border-[rgba(125,138,143,0.22)]">
      <div>
        <div className="flex items-center justify-between mb-5">
          {/* Material 3 Expressive Shape Frame housing the icon */}
          <ShapeFrame
            type={shapeType}
            fill={shapeFill}
            className="w-14 h-14"
          >
            <div className="text-[#2F3A3F] dark:text-[#FAFAF8]">
              {icon}
            </div>
          </ShapeFrame>

          <span className="text-2xl font-black text-[rgba(125,138,143,0.30)] group-hover:text-[#5B93AE] dark:group-hover:text-[#A9D6E5] transition-colors">
            {number}
          </span>
        </div>

        <h3 className="text-xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] mb-2.5 leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-[#7D8A8F] dark:text-[#9AA8AD] leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  );
};
