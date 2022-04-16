import { defaultConfig } from '../../../constants';
import { useConfig } from '../../../hooks/useConfig';

const Recipes = () => {
  const [, setConfig] = useConfig();

  const fullNodeWithWallet = () => {
    setConfig({ ...defaultConfig });
  };

  const spvWithWallet = () => {
    setConfig({
      ...defaultConfig,
      spv: true,
    });
  };

  const pruneFullNodeWithWallet = () => {
    setConfig({
      ...defaultConfig,
      prune: true,
    });
  };

  const fullNodeInbound = () => {
    setConfig({
      ...defaultConfig,
      bip37: true,
      listen: true,
      publicHost: 'IP address',
      maxInbound: 100,
    });
  };

  const recursiveResolver = () => {
    setConfig({
      ...defaultConfig,
      rsHost: 'IP address',
      rsPort: 53,
    });
  };

  const nerdMode = () => {
    setConfig({
      ...defaultConfig,
      indexAddress: true,
      indexTX: true,
      logLevel: 'spam',
    });
  };

  return (
    <div>
      <dl>
        <div onClick={fullNodeWithWallet}>
          <dt>Full node with wallet</dt>
          <dd>
            This may require up to 200 MB of disk space per day. It is the most
            private and secure way to use Handshake for transactions and
            auctions.
          </dd>
        </div>

        <div onClick={spvWithWallet}>
          <dt>SPV Node with wallet</dt>
          <dd>
            This may require up to 60 kB of disk space per day. SPV leaks some
            privacy and relies on being connecting to at least one “honest” full
            node, which may weaken overall security assumptions.
          </dd>
        </div>

        <div onClick={pruneFullNodeWithWallet}>
          <dt>Pruned full node with wallet</dt>
          <dd>
            This will never require more than 400 MB total. Only the last 288
            blocks are saved to disk. Wallet rescans are impossible in this
            mode. This node will not relay historical blocks to new
            bootstrapping nodes but otherwise is fully validating and just as
            private and secure as any full node.
          </dd>
        </div>

        <div onClick={fullNodeInbound}>
          <dt>
            Full Node that allows inbound connections from other full and light
            clients like hnsd
          </dt>
          <dd>
            <strong>IP address</strong> MUST be your external IP address,
            publicly accessible by the internet.
          </dd>
        </div>

        <div onClick={recursiveResolver}>
          <dt>Full Node with public HNS recursive resolver</dt>
          <dd>
            Note: if you configure this way it is strongly recommended to enable
            a firewall on your system to mitigate amplification attacks. This is
            not a recommended configuration for a fully public server. If your
            hsd node is running locally (on your home network or LAN) that
            should be OK. <br />
            <strong>IP address</strong> MUST be publicly accessible by the
            internet (or just your local network if applicable). You could use
            0.0.0.0 for this but that may disrupt other DNS services using port
            53 on the same machine.
          </dd>
        </div>

        <div onClick={nerdMode}>
          <dt>Full Node in "nerd mode"</dt>
          <dd>
            Useful if you are running a block explorer service or otherwise need
            access to all the data hsd could possibly provide.
          </dd>
        </div>
      </dl>
    </div>
  );
};

export default Recipes;
