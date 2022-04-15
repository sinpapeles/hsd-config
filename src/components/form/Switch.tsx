import cn from 'classnames';
import React from 'react';
import { Config } from '../../types';
import { useSingleConfig } from '../../hooks/useConfig';

interface Props {
  value?: boolean;
  onChange: (value: boolean) => void;
  label: React.ReactNode;
}
const Switch: React.FC<Props> = ({ value, onChange, label }) => (
  <div className="flex items-center space-x-1">
    <div
      className={cn(
        'flex items-center w-12 h-2 pr-1  border  border-gray-400 rounded-full cursor-pointer',
        {
          'bg-green-400': value,
          'bg-gray-200': !value,
        }
      )}
      onClick={() => onChange(!value)}
    >
      <div
        className={cn(
          'bg-black h-5 w-5 rounded-full shadow-md transform duration-150 ease-in-out',
          {
            'translate-x-6': value,
            'translate-x-0.5': !value,
          }
        )}
      ></div>
    </div>
    <span>{label}</span>
  </div>
);

export default Switch;

interface SwitchGroupProps {
  prop: keyof Config;
  label: string;
  children: React.ReactNode | React.ReactNode[];
}
export const SwitchGroup: React.FC<SwitchGroupProps> = ({
  children,
  prop,
  label,
}) => {
  const [config, onChange] = useSingleConfig<boolean>(prop);

  return (
    <div>
      <Switch label={label} value={config} onChange={onChange} />
      <span className="text-sm text-gray-500">{children}</span>
    </div>
  );
};
