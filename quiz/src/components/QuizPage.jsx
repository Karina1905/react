import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const QuizPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [timerLeft, setTimerLeft] = useState(30);

  const timerRef = useRef(null);
  const query = new URLSearchParams(location.search);
  const amount = query.get('amount') || 5;
  const difficulty = query.get('difficulty') || 'easy';

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=23&difficulty=${difficulty}&type=multiple`
      );
      const data = await res.json();

      const prepared = data.results.map((q) => ({
        ...q,
        shuffleAnswers: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5),
      }));

      setQuestions(prepared);
      setLoading(false);
    };

    fetchData();
  }, [amount, difficulty]);

  useEffect(() => {
    if (!loading) {
      setTimerLeft(30);
      timerRef.current = setInterval(() => {
        setTimerLeft((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [current, loading]);

  useEffect(() => {
  localStorage.removeItem('review');
}, [amount, difficulty]);

  const handleAnswer = (answer) => {
    clearInterval(timerRef.current);
    const correct = questions[current].correct_answer;

    if (answer === correct) {
      setScore(score + 1);
    }
    const currentQ = questions[current];
const oneAnswer = {
  question: currentQ.question,
  correct: currentQ.correct_answer,
  user: answer
};

const prevReview = JSON.parse(localStorage.getItem('review')) || [];
localStorage.setItem('review', JSON.stringify([...prevReview, oneAnswer]));

    const next = current + 1;

    if (next < questions.length) {
      setCurrent(next);
    } else {
      const result = {
        date: new Date().toLocaleString(),
        score,
        total: questions.length,
        difficulty,
      };

      const prev = JSON.parse(localStorage.getItem('results')) || [];
      localStorage.setItem('results', JSON.stringify([...prev, result]));
      navigate('/result');
    }
  };

  if (loading) return <p>Loading.....</p>;

  const q = questions[current];

  return (
    <div>
      <h2 dangerouslySetInnerHTML={{ __html: q.question }} />
      <span className="badge bg-warning text-dark">Залишилось {timerLeft} сек</span>
      <div className="list-group mt-3">
        {q.shuffleAnswers.map((ans, i) => (
          <button
            key={i}
            className="list-group-item list-group-item-action mb-2"
            onClick={() => handleAnswer(ans)}
            dangerouslySetInnerHTML={{ __html: ans }}
          />
        ))}
      </div>
      <p>Питання {current + 1} з {questions.length}</p>
    </div>
  );
};

export default QuizPage;
