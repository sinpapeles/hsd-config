import { defaultConfig } from '../../constants';
import Accordion from '../Accordion';
import Input from '../form/Input';
import Text from '../form/Text';
import { SwitchGroup } from '../form/Switch';
import { useConfig } from '../../hooks/useConfig';

const Pool: React.FC = () => {
  const [config] = useConfig();

  return (
    <Accordion title="Pool Options">
      <div className="flex flex-col space-y-5">
        <SwitchGroup label="Selfish" prop="selfish">
          Enable “selfish” mode (no relaying of txes or blocks)
        </SwitchGroup>
        <SwitchGroup label="Compact" prop="compact">
          Enable compact block relay.{' '}
          <a
            href="https://github.com/bitcoin/bips/blob/master/bip-0152.mediawiki"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            BIP 152
          </a>
          .
        </SwitchGroup>
        <SwitchGroup label="BIP 37" prop="bip37">
          Enable serving of bip37 merkleblocks.
        </SwitchGroup>

        <Input
          type="number"
          label="Max Outbound"
          prop="maxOutbound"
          placeholder={defaultConfig.maxOutbound?.toString()}
        >
          Max number of outbound connections.
        </Input>
        <Input
          type="number"
          label="Max Inbound"
          prop="maxInbound"
          placeholder={defaultConfig.maxInbound?.toString()}
        >
          Max number of inbound connections.
        </Input>
        <Input
          type="number"
          label="Max Proof RPS"
          prop="maxProofRPS"
          placeholder={defaultConfig.maxProofRPS?.toString()}
        >
          Max{' '}
          <code className="px-1 pb-0.5 bg-gray-100 border border-gray-400 rounded">
            getproof
          </code>{' '}
          DNS requests per second.
        </Input>
        <Text prop="seeds" label="Seeds" placeholder="One per line">
          Custom list of DNS seeds.
        </Text>
        <Text prop="nodes" label="Nodes" placeholder="One per line">
          List of target nodes to connect to.
        </Text>

        <SwitchGroup label="Listen" prop="listen">
          Accept incoming connections.
        </SwitchGroup>
        <Input
          label="Host"
          prop="host"
          placeholder={defaultConfig.host}
          disabled={!config.listen}
        >
          Host to listen on.
        </Input>
        <Input
          type="number"
          label="Port"
          prop="port"
          placeholder="Default port depends on the network"
          disabled={!config.listen}
        >
          Port to listen on.
        </Input>

        <Input
          type="number"
          label="Brontide Port"
          prop="brontidePort"
          placeholder={defaultConfig.brontidePort?.toString()}
        >
          Port for encrypted p2p server to listen on.
        </Input>
        <Input label="Public Host" prop="publicHost">
          Public host to advertise on network.
        </Input>
        <Input type="number" label="Public Port" prop="publicPort">
          Public port to advertise on network.
        </Input>
        <Input label="Agent" prop="agent">
          Adds a string to the user-agent of the node.
        </Input>
      </div>
    </Accordion>
  );
};

export default Pool;
