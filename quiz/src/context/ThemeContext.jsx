import {createContext, useState} from 'react'
export const ThemeContext = createContext({
    theme: 'light',
    toggleTheme: ()=> {}
})

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(() => {
  return localStorage.getItem('theme') || 'light';
});

    const toggleTheme = () => {
        setTheme((prev) => {
            const next = prev === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', next);
            return next;
        })
    }

     return(<ThemeContext.Provider value={{theme, toggleTheme}}> {children}</ThemeContext.Provider>)
}