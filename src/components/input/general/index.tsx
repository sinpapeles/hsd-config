import Common from './Common';
import Node from './Node';
import Logger from './Logger';
import Chain from './Chain';
import Mempool from './Mempool';
import Pool from './Pool';
import Miner from './Miner';
import HTTP from './HTTP';
import DNS from './DNS';

const General = () => (
  <>
    <Common />
    <Node />
    <HTTP />
    <Logger />
    <Chain />
    <Mempool />
    <Pool />
    <Miner />
    <DNS />
  </>
);

export default General;
