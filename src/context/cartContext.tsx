import { Box } from "@mui/material";
import React, { createContext, ReactNode } from "react";
import { ContextValueType } from "types";


// Create object of  context elements 
export const CartContext = createContext<ContextValueType>({
  inCart: [],
  setInCart: () => {},
  handleKey: () => {},
  handleCart: () => {},
  key: 0,
  setKey: () => {},
});

// context provider
const CartContextProvider = ({ children }: { children: ReactNode }) => {
  const [inCart, setInCart] = React.useState<any[]>([]);
  const [key, setKey] = React.useState<number>(0);
  console.log(inCart)
  const handleKey = () => {
    setKey((prev) => prev + 1);
  };
  const handleCart = (item: any,quantity:any) => {
    if (inCart.find((e: any) => e.id === item.id)) {
      const removFromCArt = inCart.filter((e: any) => e.id !== item.id);
      setInCart(removFromCArt);
    } else {
      inCart.push({ ...item,quantity });
      setInCart(inCart);
    }
    handleKey();
  };

  // Provide context value
  const contextValue: ContextValueType = {
    inCart,
    key,
    setInCart,
    setKey,
    handleKey,
    handleCart,
  };

  return (
    <CartContext.Provider value={contextValue}>
      <Box>{children}</Box>
    </CartContext.Provider>
  );
};

export default CartContextProvider;
