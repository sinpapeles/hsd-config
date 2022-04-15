import React from 'react';
import cn from 'classnames';
import { useSingleConfig } from '../../hooks/useConfig';
import { Config } from '../../types';

interface Props {
  prop: keyof Config;
  label: string;
  placeholder?: string;
  children: React.ReactNode | React.ReactNode[];
  disabled?: boolean;
}
const Text: React.FC<Props> = ({
  prop,
  label,
  placeholder = label,
  children,
  disabled = false,
}) => {
  const [value, onChange] = useSingleConfig<string[]>(prop);

  return (
    <div className={cn({ 'opacity-60': disabled })}>
      <label htmlFor={prop}>{label}:</label>
      <textarea
        id={prop}
        value={value?.join('\n')}
        className="w-full px-2 -mb-1 border border-gray-300 rounded"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value.split('\n'))}
        disabled={disabled}
        rows={5}
      />
      <span className="text-sm text-gray-500">{children}</span>
    </div>
  );
};

export default Text;
