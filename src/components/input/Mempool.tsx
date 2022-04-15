import { defaultConfig } from '../../constants';
import Accordion from '../Accordion';
import Input from '../form/Input';
import { SwitchGroup } from '../form/Switch';

const Mempool: React.FC = () => (
  <Accordion title="Mempool Options">
    <div className="flex flex-col space-y-5">
      <Input
        type="number"
        label="Mempool Size"
        prop="mempoolSize"
        placeholder={defaultConfig.mempoolSize?.toString()}
      >
        Max mempool size in MB.
      </Input>
      <SwitchGroup label="Persist Mempool" prop="persistMempool">
        Save mempool to disk and read into memory on boot
      </SwitchGroup>
    </div>
  </Accordion>
);

export default Mempool;
