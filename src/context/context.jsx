import { createContext } from "react";

export const context = createContext();

const contextProvider = (props) => {
  const contextValue = {};

  return <context.Provider>{props.children}</context.Provider>;
};

export default contextProvider;
