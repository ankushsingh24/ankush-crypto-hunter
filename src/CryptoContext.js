import React, { createContext, useState, useContext, useEffect } from "react";

const Crypto = createContext();

const CrytoContext = ({ children }) => {
  const [currency, setCurrnecy] = useState("INR");
  const [symbol, setSymbol] = useState("₹");

  useEffect(() => {
    if (currency === "INR") setSymbol("₹");
    else if (currency === "USD") setSymbol("$");
  }, [currency]);

  return (
    <Crypto.Provider value={{ currency, setCurrnecy, symbol }}>
      {children}
    </Crypto.Provider>
  );
};

export default CrytoContext;

export const CryptoState = () => {
  return useContext(Crypto);
};
