import Accordion from '../Accordion';
import Input from '../form/Input';
import { SwitchGroup } from '../form/Switch';

const Chain: React.FC = () => (
  <Accordion title="Chain Options">
    <div className="flex flex-col space-y-5">
      <SwitchGroup label="Prune" prop="prune">
        Prune from the last 288 blocks.
      </SwitchGroup>
      <SwitchGroup label="Checkpoints" prop="checkpoints">
        Use checkpoints and getheaders for the initial sync.
      </SwitchGroup>
      <Input
        type="number"
        label="Coin cache"
        prop="coinCache"
        placeholder="No UTXO cache"
      >
        The size (in MB) of the in-memory UTXO cache. By default, there is no
        UTXO cache enabled. To get a good number of cache hits per block, the
        coin cache has to be fairly large (60-100mb recommended at least).
      </Input>
      <SwitchGroup label="Index Transactions" prop="indexTX">
        Index transactions (enables transaction endpoints in REST api).
      </SwitchGroup>
      <SwitchGroup label="Index Addresses" prop="indexAddress">
        Index transactions and utxos by address.
      </SwitchGroup>
    </div>
  </Accordion>
);

export default Chain;
