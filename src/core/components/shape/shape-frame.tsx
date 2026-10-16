import React from 'react';
import { MaterialShape, MaterialShapeType } from './material-shape';

interface ShapeFrameProps {
  type: MaterialShapeType;
  color?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
  shapeClassName?: string;
  contentClassName?: string;
  children?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}

/**
 * ShapeFrame encapsulates any content inside an authentic Material 3 Expressive Shape container.
 * Perfect for audio triggers, dialect badges, avatar frames, and tactile anchors.
 */
export const ShapeFrame: React.FC<ShapeFrameProps> = ({
  type,
  color,
  fill,
  stroke,
  strokeWidth = 0,
  className = '',
  shapeClassName = '',
  contentClassName = '',
  children,
  onClick,
  style,
}) => {
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className}`}
      style={style}
      onClick={onClick}
    >
      <MaterialShape
        type={type}
        color={color}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        className={`absolute inset-0 w-full h-full pointer-events-none transition-transform duration-300 ${shapeClassName}`}
      />
      <div className={`relative z-10 flex items-center justify-center p-3 ${contentClassName}`}>
        {children}
      </div>
    </div>
  );
};

