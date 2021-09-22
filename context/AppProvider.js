import React, {createContext, useState} from 'react';

// crea el create
export const AppContext = createContext();

// crea el provider 
const AppProvider = (props) => {
  // state del context
  const [day, setDay] = useState(28);
  const [currentCategory, setCurrentCategory] = useState('Beef');
  const [time, setTime] = useState("11:00 am - 12:00 pm")

  return (
    <AppContext.Provider
      value={{
        currentDay: [day, setDay],
        category: [currentCategory, setCurrentCategory],
        currentTime: [time, setTime]
      }}
    >
      {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider;
