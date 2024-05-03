import './App.css';
// import RoutesCustom from './components/RoutesCustom';
import { useState } from 'react';
import Footer from './components/Footer';
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';
import { ResultContextProvider } from './context/ResultsContext';

function App() {
  const [darkTheme, setDarkTheme]  = useState(false)
  return (
    <ResultContextProvider>
    <div className={darkTheme ? 'dark': ''}>
      <div className='bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen'>
        <Nav setDark = {setDarkTheme} dark={darkTheme}/>
        <Footer/>
        <main>
          <Outlet/>
      </main>
      </div>
    </div>
    </ResultContextProvider>
  );
}

export default App;