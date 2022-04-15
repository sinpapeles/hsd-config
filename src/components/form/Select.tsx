import React from 'react';
import cn from 'classnames';
import { Config } from '../../types';
import { useSingleConfig } from '../../hooks/useConfig';
import { defaultConfig } from '../../constants';

interface Props {
  prop: keyof Config;
  label: string;
  options: { [key: string]: string };
  children?: React.ReactNode | React.ReactNode[];
  disabled?: boolean;
}
const Select: React.FC<Props> = ({
  prop,
  label,
  options,
  children,
  disabled,
}) => {
  const [value, onChange] = useSingleConfig<string>(prop);

  return (
    <div className={cn({ 'opacity-60': disabled })}>
      <label htmlFor={prop}>{label}:</label>
      <select
        id={prop}
        className="w-full p-2 border border-gray-300 rounded"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      >
        {Object.entries(options).map(([key, label]) => (
          <option key={key} value={key}>
            {label}
            {key === defaultConfig[prop] && ' (default)'}
          </option>
        ))}
      </select>
      {children && <span className="text-sm text-gray-500">{children}</span>}
    </div>
  );
};

export default Select;
