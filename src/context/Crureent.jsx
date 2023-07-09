import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const CurrentProduct = createContext({
  current: 0,
  changeCurrent: () => {},
});

const CurrentProvider = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const changeCurrent = (i) => {
    setCurrent(i);
  };
  return (
    <CurrentProduct.Provider
      value={{
        current,
        changeCurrent,
      }}
    >
      {children}
    </CurrentProduct.Provider>
  );
};

export const useCurrent = () => useContext(CurrentProduct);

export default CurrentProvider;
