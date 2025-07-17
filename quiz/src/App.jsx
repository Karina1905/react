import { Routes, Route } from 'react-router-dom';
import {useContext} from 'react';
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultPage from './components/ResultPage';
import ReviewPage from './components/ReviewPage';
import { ThemeContext } from './context/ThemeContext';



function App() {
  const { theme } = useContext(ThemeContext) 

  const navClass =
  theme === 'light'
    ? 'navbar navbar-expand-lg navbar-light bg-light'
    : 'navbar navbar-expand-lg navbar-dark bg-dark';


  return (
    <div className="container">
      <nav className={navClass}>
     
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/">Головна</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/quiz">Вікторина</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/result">Результати</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/review">Огляд</a>
            </li>
          </ul>
       
      
    </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/result" element={<ResultPage />} />
        <Route path="/review" element={<ReviewPage />} />
      </Routes>
    </div>
  );
}

export default App;
