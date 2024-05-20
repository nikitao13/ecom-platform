
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface CartContextType {
  cartEmpty: boolean;
  setCartEmpty: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartEmpty, setCartEmpty] = useState(true);

  return (
    <CartContext.Provider value={{ cartEmpty, setCartEmpty }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
