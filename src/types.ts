export type Network = 'mainnet' | 'testnet' | 'regtest' | 'simnet';

export interface Config {
  noWallet?: boolean;
  spv?: boolean;
  daemon?: boolean;
  network?: Network;
  config?: string;
  workers?: boolean;
  workersSize?: number;
  workersTimeout?: number;
  prefix?: string;
  maxFiles?: number;
  cacheSize?: number;
  logLevel?: 'error' | 'warning' | 'info' | 'debug' | 'spam';
  logConsole?: boolean;
  logFile?: boolean;
  prune?: boolean;
  checkpoints?: boolean;
  coinCache?: number;
  indexTX?: boolean;
  indexAddress?: boolean;
  mempoolSize?: number;
  persistMempool?: boolean;
  selfish?: boolean;
  compact?: boolean;
  bip37?: boolean;
  listen?: boolean;
  maxOutbound?: number;
  maxInbound?: number;
  maxProofRPS?: number;
  seeds?: string[];
  host?: string;
  port?: number;
  brontidePort?: number;
  publicHost?: string;
  publicPort?: number;
  nodes?: string[];
  agent?: string;
  coinbaseFlags?: string;
  coinbaseAddress?: string[];
  maxWeight?: number;
  reservedWeight?: number;
  reservedSigops?: number;
  httpHost?: string;
  httpPort?: number;
  ssl?: boolean;
  sslCert?: string;
  sslKey?: string;
  apiKey?: string;
  cors?: string;
  nsHost?: string;
  nsPort?: number;
  rsHost?: string;
  rsPort?: number;
  rsNoUnbound?: boolean;
}