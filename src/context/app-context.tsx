import React, { useContext, useState, useEffect } from 'react';

// bestColors: Map<any, any>;
//  setBestColors: (bestColors: Map<any, any>) => void;
interface AppContextInterface {
  secret: string;
  dictionary: Array<string>;
}

const AppContext = React.createContext<AppContextInterface | null>(null);

export const AppProvider: React.FC = ({ children }) => {
  const [secret, setSecret] = useState<string>(null);
  const dictionary: Array<string> = ['pasta', 'piano', 'pesto', 'cobra'];

  useEffect(() => {
    const fetchSecret = () => {
      setSecret('piano');
    };

    fetchSecret();
  }, []);

  return (
    <AppContext.Provider value={{ secret, dictionary }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
