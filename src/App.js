import React, {useContext} from 'react';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { Outlet } from 'react-router-dom';
import SearchComponent from './components/search';
import { globalContext } from './contexts/contextProvider';
import { Links } from './components/Links';


const App = () => {
  const {values} = useContext(globalContext)

  return (
    <div className = ' bg-gray-200 min-h-screen'>
      <div className="px-16 py-4">
        <div className='flex flex-wrap justify-between items-center border-b border-blue-800 pb-6'>
          <Navbar />
          <SearchComponent/>
        </div>
        {values.showLink && <Links/>}
          <main>
            <Outlet/>
          </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
