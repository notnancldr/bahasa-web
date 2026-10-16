import React from 'react';
import { MaterialShapeType } from '../../../../core/components/shape/material-shape';
import { ShapeFrame } from '../../../../core/components/shape/shape-frame';

export interface FeatureCardProps {
  shapeType: MaterialShapeType;
  shapeFill: string;
  icon: React.ReactNode;
  badge: string;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  shapeType,
  shapeFill,
  icon,
  badge,
  title,
  description,
}) => {
  return (
    <div className="relative group pt-8 border-t border-[rgba(125,138,143,0.22)] flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <ShapeFrame
            type={shapeType}
            fill={shapeFill}
            className="w-13 h-13"
          >
            <div className="text-[#2F3A3F]">
              {icon}
            </div>
          </ShapeFrame>

          <span className="text-xs font-bold text-[#5B93AE] dark:text-[#A9D6E5] uppercase tracking-wider">
            {badge}
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-black text-[#2F3A3F] dark:text-[#E8EFF1] mb-2.5 leading-snug tracking-tight">
          {title}
        </h3>
        <p className="text-sm text-[#7D8A8F] dark:text-[#9AA8AD] font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
