import logo from './assets/logo.svg';
import Common from './components/input/Common';
import Node from './components/input/Node';
import Logger from './components/input/Logger';
import Chain from './components/input/Chain';
import Mempool from './components/input/Mempool';
import Pool from './components/input/Pool';
import Miner from './components/input/Miner';
import HTTP from './components/input/HTTP';
import DNS from './components/input/DNS';
import Output from './components/output';

const App = () => (
  <div className="flex justify-center max-h-screen">
    <div className="flex flex-col max-h-full">
      <header className="flex items-center my-8 text-3xl">
        <img src={logo} alt="" className="w-10 h-10" />
        Config Generator
      </header>
      <div className="flex flex-grow overflow-auto">
        <div className="flex flex-col space-y-2 w-[30rem] overflow-auto mb-3">
          <Common />
          <Node />
          <HTTP />
          <Logger />
          <Chain />
          <Mempool />
          <Pool />
          <Miner />
          <DNS />
        </div>
        <Output />
      </div>
    </div>
  </div>
);

export default App;
