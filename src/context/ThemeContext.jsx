import React, { createContext, useContext } from "react"

//1. Create a context
export const ThemeContext = React.createContext();

//2. Create a Provider for this newly created context
export const ThemeContextProvider = ThemeContext.Provider

//3. We can create a custom hook in this file itself which will basically just use the 'useContext' hook.
//This is to save importing 2 files in every component i.e. ContextProvider & useContext hook 
export const useTheme = () => {
    return useContext(ThemeContext);
}
