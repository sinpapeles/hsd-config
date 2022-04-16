import logo from './assets/logo.svg';
import Input from './components/input';
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
        <div className="flex flex-col pb-3 md:w-1/2 md:overflow-auto ">
          <Input />
        </div>
        <div className="py-3 md:w-1/2 md:mx-5 md:py-0">
          <Output />
        </div>
      </div>
      <footer className="flex justify-around p-5 pb-2 space-x-2 text-sm text-center md:space-x-5 md:divide-x divide-dashed md:justify-center">
        <Footer />
      </footer>
    </div>
  </div>
);

export default App;
