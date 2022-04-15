import { defaultConfig } from '../../constants';
import Accordion from '../Accordion';
import Input from '../form/Input';
import Text from '../form/Text';

const Miner: React.FC = () => (
  <Accordion title="Miner Options">
    <div className="flex flex-col space-y-5">
      <Input
        label="Coinbase Flags"
        prop="coinbaseFlags"
        placeholder={defaultConfig.coinbaseFlags}
      />
      <Text
        label="Coinbase Addresses"
        prop="coinbaseAddress"
        placeholder="One per line"
      >
        List of payout addresses, randomly selected during block creation.
      </Text>
      <Input
        type="number"
        label="Max Weight"
        prop="maxWeight"
        placeholder={defaultConfig.maxWeight?.toString()}
      >
        Max block weight to mine.
      </Input>
      <Input
        type="number"
        label="Reserved Weight"
        prop="reservedWeight"
        placeholder={defaultConfig.reservedWeight?.toString()}
      >
        Amount of space reserved for coinbase.
      </Input>
      <Input
        type="number"
        label="Reserved Sigops"
        prop="reservedSigops"
        placeholder={defaultConfig.reservedSigops?.toString()}
      >
        Amount of sigops reserved for coinbase.
      </Input>
    </div>
  </Accordion>
);

export default Miner;
