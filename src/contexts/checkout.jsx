import { createContext, useState } from "react";

const initial = {
  isOpen: false,
  setIsOpen: () => {},
};
export const CheckoutContext = createContext(initial);

export const CheckoutProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = { isOpen, setIsOpen };
  return (
    <CheckoutContext.Provider value={value}>
      {children}
    </CheckoutContext.Provider>
  );
};
