import { useRef, useState } from 'react';
import cn from 'classnames';
import { ChevronUpIcon } from '@heroicons/react/solid';

interface Props {
  title: string;
  children: React.ReactNode | React.ReactNode[];
}
const index: React.FC<Props> = ({ title, children }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(' hover:bg-indigo-50 w-full rounded', {
        'bg-indigo-50': open,
      })}
    >
      <div
        className="flex items-center px-5 space-x-2 transition cursor-pointer h-14"
        onClick={() => setOpen(!open)}
      >
        <ChevronUpIcon
          className={cn('w-5 h-5 transition-all', {
            'rotate-180': !open,
          })}
        />
        <h3 className="text-xl">{title}</h3>
      </div>

      <div
        className="overflow-hidden max-h-0 "
        ref={ref}
        style={{
          maxHeight: open ? ref.current!.scrollHeight + 32 : 0,
          transition: 'max-height 0.15s ease-out, padding 0.3s ease',
        }}
      >
        <div className="p-5 pt-0">{children}</div>
      </div>
    </div>
  );
};

export default index;
