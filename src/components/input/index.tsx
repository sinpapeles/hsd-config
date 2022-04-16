import cn from 'classnames';
import { useState } from 'react';
import {
  CubeTransparentIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline';
import General from './general';
import Recipes from './recipes';

const tabClass = (active: boolean) =>
  cn(
    'px-6 border border-b-0 border-gray-200 rounded-t-lg whitespace-nowrap select-none cursor-pointer',
    {
      'py-2 bg-white': active,
      'py-1 bg-gray-100': !active,
    }
  );

const tabs = {
  general: (
    <>
      <CubeTransparentIcon className="w-4 h-4" />
      <span>General</span>
    </>
  ),
  recipes: (
    <>
      <ClipboardListIcon className="w-4 h-4" />
      <span>Recipes</span>
    </>
  ),
};

const Output: React.FC = () => {
  const [tab, setTab] = useState('general');

  return (
    <div>
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
      <div className="p-2 border border-gray-200 rounded-b rounded-tr">
        {tab === 'general' && <General />}
        {tab === 'recipes' && <Recipes />}
      </div>
    </div>
  );
};

export default Output;
