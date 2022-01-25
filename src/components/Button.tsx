import React from 'react';
import { colors } from '../theme/colors';

interface Props {
  buttonKey: string;
  color?: string;
  onKey: (buttonKey: string) => void;
}
const Button: React.FC<Props> = ({
  buttonKey,
  children,
  color = colors.lightgrey,
  onKey,
}) => {
  return (
    <button
      className="button"
      style={{ backgroundColor: color, borderColor: color }}
      onClick={() => onKey(buttonKey)}
    >
      {children}
    </button>
  );
};

export default Button;
