import { defaultConfig } from '../../constants';
import { useConfig } from '../../hooks/useConfig';
import Accordion from '../Accordion';
import Input from '../form/Input';
import { SwitchGroup } from '../form/Switch';

const Http: React.FC = () => {
  const [config] = useConfig();

  return (
    <Accordion title="DNS Options">
      <div className="flex flex-col space-y-5">
        <Input label="NS Host" prop="nsHost" placeholder={defaultConfig.nsHost}>
          Host for authoritative nameserver to listen on.
        </Input>
        <Input
          type="number"
          label="NS Port"
          prop="nsPort"
          placeholder="Default port depends on the network"
        >
          Port for authoritative nameserver to listen on.
        </Input>
        <Input label="Public Host" prop="publicHost">
          (Same as pool option) applies to authoritative nameserver.
        </Input>

        <Input label="RS Host" prop="rsHost" placeholder={defaultConfig.rsHost}>
          Host for recursive nameserver to listen on.
        </Input>
        <Input
          type="number"
          label="RS Port"
          prop="rsPort"
          placeholder="Default port depends on the network"
        >
          Port for recursive nameserver to listen on.
        </Input>

        <SwitchGroup prop="rsNoUnbound" label="RS no Unbound">
          Whether to use the hsd JavaScript resolver as the recursive resolver.
        </SwitchGroup>
      </div>
    </Accordion>
  );
};

export default Http;
