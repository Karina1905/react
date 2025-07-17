import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ResultPage = () => {
  const [results, setResults] = useState([]);
 const navigate = useNavigate();
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('results')) || [];
    setResults(saved);
  }, []);

  return (
    <div>
      <h1>Results:</h1>
      {results.length === 0 && <p>Немає жодного проходження</p>}
      <ul className="list-group">
        {results.map((r, i) => (
          <li key={i} className="list-group-item">
            <p>Дата: {r.date}</p>
            <p>Складність: {r.difficulty}</p>
            <p>Результат: {r.score} з {r.total}</p>
          </li>
        ))}
      </ul>
      <button type="submit" className="btn btn-outline-primary mt-4" onClick={() => navigate('/')}>Пройти тест заново</button>
    </div>
  );
};

export default ResultPage;
