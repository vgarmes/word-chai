import React, { useContext, useState, useEffect } from 'react';

interface AppContextInterface {
  secret: string;
}

const AppContext = React.createContext<AppContextInterface | null>(null);

const AppProvider: React.FC = ({ children }) => {
  const [secret, setSecret] = useState<string>(null);

  useEffect(() => {
    const fetchSecret = () => {
      setSecret('piano');
    };

    fetchSecret();
  }, []);

  return (
    <AppContext.Provider value={{ secret }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
