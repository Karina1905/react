import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const [amount, setAmount] = useState(5);
  const [difficulty, setDifficulty] = useState('easy');
  const navigate = useNavigate();

  const handleStart = (e) => {
    e.preventDefault();
    navigate(`/quiz?amount=${amount}&difficulty=${difficulty}`);
  };

  return (
    <div>
      <h1 className="text-center text-primary mb-4">Вибір налаштувань</h1>
      <form onSubmit={handleStart}>
        <div className="mb-3">
          <label>Кількість питань:</label>
          <input
            type="number"
            min="1"
            max="50"
            className="form-control"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Складність:</label>
          <select
            className="form-select"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Легка</option>
            <option value="medium">Середня</option>
            <option value="hard">Складна</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Почати тест
        </button>
      </form>
    </div>
  );
};

export default HomePage;
