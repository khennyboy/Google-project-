import React, {
  createContext,
  useState
} from 'react';
import AllComponent from './component/allComponent';


export const calcValues = createContext()
const App = () => {
  const [values, setValues] = useState({
    totalValue: 0,
    tipValue: 0,
    numPeople: 0
  })

  return (
    <div>
      <calcValues.Provider value={{ values, setValues }}>
        <div className='min-h-screen flex justify-center items-center w-[80%] largeTablet:w-[85%] mx-auto tablet:w-[90%] android:w-full android:items-start'>
          <AllComponent />
        </div>
      </calcValues.Provider>
    </div>
  );
};

export default App;
