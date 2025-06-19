import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
const ThemeLayout = ({children}) => 
    { 
        const {theme, toggleTheme }= useContext(ThemeContext);

         const wrapperClass =
    theme === 'light'
      ? 'bg-light text-dark min-vh-100'
      : 'bg-dark text-light min-vh-100';
    return (  <div className={wrapperClass}>
      <div className="d-flex justify-content-end p-3">
        <button
          className="btn btn-outline-secondary"
          onClick={toggleTheme}
        >
          {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
      </div>
      {children}
    </div> );
}
 
export default ThemeLayout;
 
