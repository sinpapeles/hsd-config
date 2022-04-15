import cn from 'classnames';
import { useState } from 'react';
import { Config } from '../../types';
import CLI from './CLI';
import ConfigFile from './ConfigFile';
import EnvVars from './EnvVars';

const tabClass = (active: boolean) =>
  cn(
    'px-6 bg-white border border-b-0 border-gray-200 rounded-t-lg whitespace-nowrap select-none cursor-pointer',
    {
      'py-2': active,
      'py-1 bg-gray-100': !active,
    }
  );

const tabs = {
  cli: 'CLI',
  file: 'Config File',
  // env: 'Env Vars',
};

const Output: React.FC = () => {
  const [tab, setTab] = useState('cli');

  return (
    <div className="mx-5 w-[30rem]">
      <ul className="flex items-end space-x-1">
        {Object.entries(tabs).map(([key, value]) => (
          <li
            key={key}
            className={tabClass(tab === key)}
            onClick={() => setTab(key)}
          >
            {value}
          </li>
        ))}
      </ul>
      <div className="p-5 border border-gray-200 rounded-b rounded-tr">
        {tab === 'cli' && <CLI />}
        {tab === 'file' && <ConfigFile />}
        {tab === 'env' && <EnvVars />}
      </div>
    </div>
  );
};

export default Output;
