import { defaultConfig } from '../../constants';
import { useConfig } from '../../hooks/useConfig';
import Accordion from '../Accordion';
import Input from '../form/Input';
import { SwitchGroup } from '../form/Switch';

const Http: React.FC = () => {
  const [config] = useConfig();

  return (
    <Accordion title="HTTP Options">
      <div className="flex flex-col space-y-5">
        <Input
          label="HTTP Host"
          prop="httpHost"
          placeholder={defaultConfig.httpHost}
        >
          HTTP host to listen on.
        </Input>
        <Input
          type="number"
          label="HTTP Port"
          prop="httpPort"
          placeholder="Default port depends on the network"
        >
          HTTP port to listen on.
        </Input>
        <SwitchGroup label="Enable SSL" prop="ssl">
          Whether to use SSL.
        </SwitchGroup>

        <Input label="SSL Cert" prop="sslCert" disabled={!config.ssl}>
          Path to SSL certificate.
        </Input>
        <Input label="SSL Key" prop="sslKey" disabled={!config.ssl}>
          Path to SSL key.
        </Input>
        <Input label="API Key" prop="apiKey">
          Used for accessing all node APIs, may be different than API key for
          wallet server.
        </Input>
        <SwitchGroup label="Enable CORS" prop="cors">
          Enable “Cross-Origin Resource Sharing” HTTP headers.
        </SwitchGroup>
      </div>
    </Accordion>
  );
};

export default Http;
