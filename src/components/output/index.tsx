import cn from 'classnames';
import { useState } from 'react';
import {
  TerminalIcon,
  DocumentTextIcon,
  // AdjustmentsIcon,
} from '@heroicons/react/outline';
import CLI from './CLI';
import ConfigFile from './ConfigFile';
import EnvVars from './EnvVars';

const tabClass = (active: boolean) =>
  cn(
    'px-6 border border-b-0 border-gray-200 rounded-t-lg whitespace-nowrap select-none cursor-pointer transition-colors duration-500',
    {
      'py-2 bg-white': active,
      'py-1 bg-gray-100': !active,
    }
  );

const tabs = {
  cli: (
    <>
      <TerminalIcon className="w-4 h-4" />
      <span>CLI</span>
    </>
  ),
  file: (
    <>
      <DocumentTextIcon className="w-4 h-4" />
      <span>Config File</span>
    </>
  ),
  // env: (
  //   <>
  //     <AdjustmentsIcon className="w-4 h-4" />
  //     <span>Env Vars</span>
  //   </>
  // ),
};

const Output: React.FC = () => {
  const [tab, setTab] = useState('cli');

  return (
    <>
      <ul className="flex items-end space-x-1">
        {Object.entries(tabs).map(([key, value]) => (
          <li
            key={key}
            className={tabClass(tab === key)}
            onClick={() => setTab(key)}
          >
            <span className="flex items-center space-x-1">{value}</span>
          </li>
        ))}
      </ul>
      <div className="p-5 border border-gray-200 rounded-b rounded-tr">
        {tab === 'cli' && <CLI />}
        {tab === 'file' && <ConfigFile />}
        {tab === 'env' && <EnvVars />}
      </div>
    </>
  );
};

export default Output;
