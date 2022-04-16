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
import Footer from './components/Footer';

const App = () => (
  <div className="flex justify-center h-screen">
    <div className="flex flex-col h-full">
      <header className="flex items-center px-5 my-5 text-3xl md:my-8">
        <img src={logo} alt="" className="w-10 h-10" />
        Config Generator
      </header>
      <div className="flex flex-col flex-grow px-2 divide-y-2 md:divide-y-0 md:flex-row md:overflow-auto max-w-[60rem]  w-screen ">
        <div className="flex flex-col pb-3 space-y-2 md:w-1/2 md:overflow-auto ">
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
        <div className="py-3 md:w-1/2 md:mx-5 md:py-0">
          <Output />
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default App;
