import Accordion from '../Accordion';
import Input from '../form/Input';
import Select from '../form/Select';
import { SwitchGroup } from '../form/Switch';

const Common: React.FC = () => (
  <Accordion title="Common Options">
    <div className="flex flex-col space-y-5">
      <SwitchGroup label="Daemon" prop="daemon">
        Launches hsd in the background (a detached child process of the command
        script).
      </SwitchGroup>
      <SwitchGroup label="SPV" prop="spv">
        Launches hsd in SPV (Simplified Payment Verification) mode, aka{' '}
        <a
          href="https://github.com/bitcoin/bips/blob/master/bip-0037.mediawiki"
          className="text-blue-600 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          BIP37
        </a>
        .
      </SwitchGroup>
      <SwitchGroup label="No wallet" prop="noWallet">
        Launches hsd without a wallet plugin, allowing hs-wallet to be run in a
        separate process.
      </SwitchGroup>

      <Input
        label="Config location"
        prop="config"
        placeholder="~/.hsd/hsd.conf"
      >
        Points to a custom config file, not in the prefix directory.
      </Input>

      <Select
        prop="network"
        label="Network"
        options={{
          mainnet: 'Mainnet',
          testnet: 'Testnet',
          regtest: 'Regtest',
          simnet: 'Simnet',
        }}
      >
        Which network’s chainparams to use for the node.
      </Select>
    </div>
  </Accordion>
);

export default Common;
