import React, { useMemo, useState } from 'react';
import { defaultConfig } from '../../constants';
import { useConfig } from '../../hooks/useConfig';
import Switch from '../form/Switch';
import Copy from '../Copy';

const CLI: React.FC = () => {
  const [config] = useConfig();
  const [singleLine, setSingleLine] = useState(false);

  const command = useMemo(() => {
    const args: string[] = ['./hsd'];

    if (config.daemon) {
      args.push('--daemon');
    }

    if (config.spv) {
      args.push('--spv');
    }

    if (config.noWallet) {
      args.push('--no-wallet');
    }

    if (config.config && config.config !== defaultConfig.config) {
      args.push(`--config="${config.config}"`);
    }

    if (config.prefix && config.prefix !== defaultConfig.prefix) {
      args.push(`--prefix="${config.prefix}"`);
    }

    if (config.network && config.network !== defaultConfig.network) {
      args.push(`--network=${config.network}`);
    }

    if (!config.workers) {
      args.push(`--workers=false`);
    }

    if (config.workers && config.workersSize) {
      args.push(`--workers-size=${config.workersSize}`);
    }

    if (
      config.workers &&
      config.workersTimeout &&
      config.workersTimeout !== defaultConfig.workersTimeout
    ) {
      args.push(`--workers-timeout=${config.workersTimeout}`);
    }

    if (config.maxFiles && config.maxFiles !== defaultConfig.maxFiles) {
      args.push(`--max-files=${config.maxFiles}`);
    }

    if (config.cacheSize && config.cacheSize !== defaultConfig.cacheSize) {
      args.push(`--cache-size=${config.cacheSize}`);
    }

    if (
      config.logLevel &&
      config.logLevel !== defaultConfig.logLevel &&
      (config.logConsole || config.logFile)
    ) {
      args.push(`--log-level=${config.logLevel}`);
    }

    if (!config.logConsole) {
      args.push(`--log-console=false`);
    }

    if (!config.logFile) {
      args.push(`--log-file=false`);
    }

    if (config.prune) {
      args.push('--prune');
    }

    if (config.checkpoints) {
      args.push('--checkpoints');
    }

    if (config.coinCache) {
      args.push(`--coin-cache=${config.coinCache}`);
    }

    if (config.indexTX) {
      args.push(`--index-tx`);
    }

    if (config.indexAddress) {
      args.push(`--index-address`);
    }

    if (
      config.mempoolSize &&
      config.mempoolSize !== defaultConfig.mempoolSize
    ) {
      args.push(`--mempool-size=${config.mempoolSize}`);
    }

    if (config.persistMempool) {
      args.push(`--persist-mempool`);
    }

    if (config.selfish) {
      args.push(`--selfish`);
    }

    if (!config.compact) {
      args.push(`--compact=false`);
    }

    if (config.bip37) {
      args.push(`--bip37`);
    }

    if (config.listen) {
      args.push(`--listen`);
    }

    if (
      config.maxOutbound &&
      config.maxOutbound !== defaultConfig.maxOutbound
    ) {
      args.push(`--max-outbound=${config.maxOutbound}`);
    }

    if (config.maxInbound && config.maxInbound !== defaultConfig.maxInbound) {
      args.push(`--max-inbound=${config.maxInbound}`);
    }

    if (
      config.maxProofRPS &&
      config.maxProofRPS !== defaultConfig.maxProofRPS
    ) {
      args.push(`--max-proof-rps=${config.maxProofRPS}`);
    }

    if (config.seeds?.filter(String)?.length) {
      args.push(`--seeds=${config.seeds.filter(String).join(',')}`);
    }

    if (config.nodes?.filter(String)?.length) {
      args.push(`--nodes=${config.nodes.filter(String).join(',')}`);
    }

    if (config.listen && config.host && config.host !== defaultConfig.host) {
      args.push(`--host=${config.host}`);
    }

    if (
      config.port &&
      ((config.network === 'mainnet' && config.port !== 12038) ||
        (config.network === 'testnet' && config.port !== 13038) ||
        (config.network === 'regtest' && config.port !== 14038) ||
        (config.network === 'simnet' && config.port !== 15038))
    ) {
      args.push(`--port=${config.port}`);
    }

    if (
      config.brontidePort &&
      config.brontidePort !== defaultConfig.brontidePort
    ) {
      args.push(`--brontide-port=${config.brontidePort}`);
    }

    if (config.publicHost) {
      args.push(`--public-host=${config.publicHost}`);
    }

    if (config.publicPort) {
      args.push(`--public-port=${config.publicPort}`);
    }

    if (config.agent) {
      args.push(`--agent="${config.agent}"`);
    }

    if (
      config.coinbaseFlags &&
      config.coinbaseFlags !== defaultConfig.coinbaseFlags
    ) {
      args.push(`--coinbase-flags="${config.coinbaseFlags}"`);
    }

    if (config.coinbaseAddress?.filter(String)?.length) {
      args.push(
        `--coinbase-address=${config.coinbaseAddress.filter(String).join(',')}`
      );
    }

    if (config.maxWeight && config.maxWeight !== defaultConfig.maxWeight) {
      args.push(`--max-weight=${config.maxWeight}`);
    }

    if (
      config.reservedWeight &&
      config.reservedWeight !== defaultConfig.reservedWeight
    ) {
      args.push(`--reserved-weight=${config.reservedWeight}`);
    }

    if (
      config.reservedSigops &&
      config.reservedSigops !== defaultConfig.reservedSigops
    ) {
      args.push(`--reserved-sigops=${config.reservedSigops}`);
    }

    if (config.httpHost && config.httpHost !== defaultConfig.httpHost) {
      args.push(`--http-host=${config.httpHost}`);
    }

    if (
      config.httpPort &&
      ((config.network === 'mainnet' && config.httpPort !== 12037) ||
        (config.network === 'testnet' && config.httpPort !== 13037) ||
        (config.network === 'regtest' && config.httpPort !== 14037) ||
        (config.network === 'simnet' && config.httpPort !== 15037))
    ) {
      args.push(`--http-port=${config.httpPort}`);
    }

    if (config.ssl) {
      args.push(`--ssl`);
    }

    if (config.ssl && config.sslCert) {
      args.push(`--ssl-cert="${config.sslCert}"`);
    }

    if (config.ssl && config.sslKey) {
      args.push(`--ssl-key="${config.sslKey}"`);
    }

    if (config.nsHost && config.nsHost !== defaultConfig.nsHost) {
      args.push(`--ns-host=${config.nsHost}`);
    }

    if (
      config.nsPort &&
      ((config.network === 'mainnet' && config.nsPort !== 5349) ||
        (config.network === 'testnet' && config.nsPort !== 15349) ||
        (config.network === 'regtest' && config.nsPort !== 25349) ||
        (config.network === 'simnet' && config.nsPort !== 35349))
    ) {
      args.push(`--ns-port=${config.nsPort}`);
    }

    if (config.rsHost && config.rsHost !== defaultConfig.rsHost) {
      args.push(`--rs-host=${config.rsHost}`);
    }

    if (
      config.rsPort &&
      ((config.network === 'mainnet' && config.rsPort !== 5350) ||
        (config.network === 'testnet' && config.rsPort !== 15350) ||
        (config.network === 'regtest' && config.rsPort !== 25350) ||
        (config.network === 'simnet' && config.rsPort !== 35350))
    ) {
      args.push(`--rs-port=${config.rsPort}`);
    }

    if (config.rsNoUnbound) {
      args.push(`--rs-no-unbound`);
    }

    const joiner = singleLine ? ' ' : ' \\\n\t';

    return args.join(joiner);
  }, [config, singleLine]);

  return (
    <div>
      <Switch label="Single line" value={singleLine} onChange={setSingleLine} />
      <pre className="p-3 mt-3 overflow-auto bg-gray-100 border rounded">
        {command}
      </pre>
      <Copy value={command} />
    </div>
  );
};

export default CLI;
