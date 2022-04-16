import { defaultConfig } from '../../../constants';
import { useConfig } from '../../../hooks/useConfig';
import Accordion from '../../Accordion';
import Input from '../../form/Input';
import { SwitchGroup } from '../../form/Switch';

const Node: React.FC = () => {
  const [config] = useConfig();

  return (
    <Accordion title="Node Options">
      <div className="flex flex-col space-y-5">
        <Input label="Prefix" prop="prefix" placeholder={defaultConfig.prefix}>
          The data directory (stores databases, logs, and configs)
        </Input>
        <SwitchGroup label="Workers" prop="workers">
          Whether to use a worker process pool for transaction verification.
        </SwitchGroup>
        <Input
          type="number"
          label="Max workers"
          prop="workersSize"
          placeholder="Same as CPUs/cores"
          disabled={!config.workers}
        >
          Number of worker processes to spawn for transaction verification. By
          default, the worker pool will be sized based on the number of
          CPUs/cores in the machine.
        </Input>
        <Input
          type="number"
          label="Workers timeout"
          prop="workersTimeout"
          disabled={!config.workers}
        >
          Worker process execution timeout in milliseconds.
        </Input>
        <Input
          type="number"
          label="Max files"
          prop="maxFiles"
          placeholder={defaultConfig.maxFiles?.toString()}
        >
          Max open files for leveldb. Higher generally means more disk page
          cache benefits, but also more memory usage.
        </Input>
        <Input
          type="number"
          label="Cache size"
          prop="cacheSize"
          placeholder={defaultConfig.cacheSize?.toString()}
        >
          Size (in MB) of leveldb cache and write buffer.
        </Input>
      </div>
    </Accordion>
  );
};

export default Node;
