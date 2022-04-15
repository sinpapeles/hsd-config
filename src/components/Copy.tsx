import React, { useEffect, useState } from 'react';
import { useCopyToClipboard } from 'react-use';

const INITIAL = 'Click to copy';

interface Props {
  value: string;
}
const Copy: React.FC<Props> = ({ value }) => {
  const [label, setLabel] = useState(INITIAL);
  const [copyState, copy] = useCopyToClipboard();

  useEffect(() => {
    if (!copyState.value) {
      return;
    }

    setLabel('Copied!');

    const timer = setTimeout(() => {
      setLabel(INITIAL);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copyState]);

  return (
    <span className="text-sm text-gray-600" onClick={() => copy(value)}>
      {label}
    </span>
  );
};

export default Copy;
