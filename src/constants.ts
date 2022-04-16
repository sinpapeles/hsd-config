import { Config } from './types';

export const defaultConfig: Config = {
  config: '~/.hsd/hsd.conf',
  network: 'mainnet',
  workers: true,
  workersTimeout: 120000,
  prefix: '~/.hsd',
  maxFiles: 64,
  cacheSize: 32,
  logLevel: 'debug',
  logConsole: true,
  logFile: true,
  mempoolSize: 100,
  maxOutbound: 8,
  maxInbound: 30,
  maxProofRPS: 100,
  host: '0.0.0.0',
  brontidePort: 44806,
  compact: true,
  coinbaseFlags: 'mined by hsd',
  maxWeight: 4000000,
  reservedWeight: 4000,
  reservedSigops: 400,
  httpHost: '127.0.0.1',
  nsHost: '127.0.0.1',
  rsHost: '127.0.0.1',
  checkpoints: true,

  noWallet: false,
  spv: false,
  daemon: false,
  prune: false,
  indexTX: false,
  indexAddress: false,
  persistMempool: false,
  selfish: false,
  bip37: false,
  listen: false,
  seeds: [],
  port: 0,
  publicPort: 0,
  nodes: [],
  agent: '',
  coinbaseAddress: [],
  httpPort: 0,
  ssl: false,
  sslCert: '',
  sslKey: '',
  apiKey: '',
  cors: false,
  nsPort: 0,
  rsPort: 0,
  rsNoUnbound: false,
};
