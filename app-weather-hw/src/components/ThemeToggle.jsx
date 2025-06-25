import {useContext} from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = ({children}) => {
    const {theme, toggleTheme} = useContext(ThemeContext);
const wrapperClass = theme === 'light' ?
'bg-light text-dark min-vh-100'
: 'bg-dark text-light min-vh-100';

const btnClass = theme ==='light'?
"btn btn-dark"
:"btn btn-light";

return(<div className={wrapperClass}>
    <button className={btnClass} onClick={toggleTheme}>
        {theme === 'light'? 'Dark Mode' : 'Light Mode'}
    </button>
    {children}
</div>);}

export default ThemeToggle;