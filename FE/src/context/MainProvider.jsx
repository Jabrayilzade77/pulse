import React, { createContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const MainContext = createContext();

function MainProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket",[]);

  function addBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);

    if (index !== -1) {
      basket[index].count++;
      setBasket([...basket]);
    } else {
      setBasket([...basket, { ...item, count: 1 }]);
    }
  }


  function decBasket(item) {
    const index = basket.findIndex((x) => x._id === item._id);

    if (basket[index].count > 1) {
      basket[index].count--;
      setBasket([...basket]);
    }
  }
  function removeProduct(item) {
    return setBasket([...basket.filter(x=>x._id !== item._id)])
    
  }

  return (
    <MainContext.Provider value={{ basket, addBasket,decBasket,removeProduct }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
