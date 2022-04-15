import React from 'react';
import cn from 'classnames';
import { useSingleConfig } from '../../hooks/useConfig';
import { Config } from '../../types';

interface Props {
  prop: keyof Config;
  label: string;
  placeholder?: string;
  children?: React.ReactNode | React.ReactNode[];
  type?: 'text' | 'number';
  disabled?: boolean;
}
const Input: React.FC<Props> = ({
  prop,
  label,
  placeholder = label,
  children,
  type = 'text',
  disabled = false,
}) => {
  const [value, onChange] = useSingleConfig<string | number>(prop);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      onChange(Number(e.target.value));
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <div className={cn({ 'opacity-60': disabled })}>
      <label htmlFor={prop}>{label}:</label>
      <input
        id={prop}
        type={type}
        value={value}
        className="w-full px-2 border border-gray-300 rounded"
        placeholder={placeholder}
        onChange={handleChange}
        disabled={disabled}
      />
      {children && <span className="text-sm text-gray-500">{children}</span>}
    </div>
  );
};

export default Input;
