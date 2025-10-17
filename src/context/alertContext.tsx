import React, { createContext, useContext, useState, ReactNode } from "react";

type AlertState = {
  isOpen: boolean;
  type: 'success' | 'error' | '';
  message: string;
};

type AlertContextValue = AlertState & {
  onOpen: (type: 'success' | 'error', message: string) => void;
  onClose: () => void;
};

const AlertContext = createContext<AlertContextValue | undefined>(undefined);

export const AlertProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AlertState>({
    isOpen: false,
    type: 'success',
    message: '',
  });

  const value: AlertContextValue = {
    ...state,
    onOpen: (type, message) => setState({ isOpen: true, type, message }),
    onClose: () => setState({ isOpen: false, type: '', message: '' }),
  };

  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>;
};

export const useAlertContext = () => {
  const ctx = useContext(AlertContext);
  if (!ctx) throw new Error('useAlertContext must be used within an AlertProvider');
  return ctx;
};
