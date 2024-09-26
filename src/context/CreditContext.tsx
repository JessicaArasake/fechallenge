import React, {createContext, useState, useContext, ReactNode} from 'react';

export interface Credit {
  id: number;
  amount: number;
}

interface CreditContextType {
  selectedCredit: Credit | null;
  setSelectedCredit: (credit: Credit) => void;
}

const CreditContext = createContext<CreditContextType | null>(null);

export const CreditProvider = ({children}: {children: ReactNode}) => {
  const [selectedCredit, setSelectedCredit] = useState<Credit | null>(null);

  return (
    <CreditContext.Provider value={{selectedCredit, setSelectedCredit}}>
      {children}
    </CreditContext.Provider>
  );
};

export const useCredit = () => {
  const context = useContext(CreditContext);
  if (context === null) {
    throw new Error('useCredit must be used within a CreditProvider');
  }
  return context;
};
