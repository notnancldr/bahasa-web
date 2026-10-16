import React from 'react';
import { MaterialShapeType } from '../../../../core/components/shape/material-shape';
import { ShapeFrame } from '../../../../core/components/shape/shape-frame';

export interface PhilosophyCardProps {
  number: string;
  shapeType: MaterialShapeType;
  shapeFill: string;
  title: string;
  description: string;
  accentColor: string;
}

export const PhilosophyCard: React.FC<PhilosophyCardProps> = ({
  number,
  shapeType,
  shapeFill,
  title,
  description,
  accentColor,
}) => {
  return (
    <div className="relative group pt-8 border-t border-[rgba(125,138,143,0.22)] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className={`text-4xl sm:text-5xl font-black tracking-tight ${accentColor}`}>
            {number}
          </span>
          <ShapeFrame
            type={shapeType}
            fill={shapeFill}
            className="w-11 h-11"
          >
            <span className="text-[10px] font-bold text-[#2F3A3F]">
              {number}
            </span>
          </ShapeFrame>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] mb-3 leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-[#7D8A8F] dark:text-[#9AA8AD] font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
