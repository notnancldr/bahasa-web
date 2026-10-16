import React from 'react';
import {
  MATERIAL_SHAPE_PATHS,
  MaterialShapeType,
} from './material-shape.constants';

export type { MaterialShapeType };

interface MaterialShapeProps {
  type: MaterialShapeType;
  color?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const MaterialShape: React.FC<MaterialShapeProps> = ({
  type,
  color,
  fill = 'currentColor',
  stroke,
  strokeWidth = 0,
  className = '',
  style,
  children,
}) => {
  const path = MATERIAL_SHAPE_PATHS[type];

  return (
    <svg
      viewBox="0 0 190 190"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`}
      style={style}
      aria-hidden="true"
    >
      <path
        d={path}
        fill={color || fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      {children}
    </svg>
  );
};

