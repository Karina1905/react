import { useEffect, useState } from 'react';

const ReviewPage = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const savedAnswers = JSON.parse(localStorage.getItem('review')) || [];
    setAnswers(savedAnswers);
  }, []);

  if (answers.length === 0) return <p>Немає відповідей для перегляду</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary mb-4">Перегляд відповідей</h2>

      {answers.map((item, index) => (
        <div key={index} className="card mb-3">
          <div className="card-header">
            Питання {index + 1}
          </div>
          <div className="card-body">
            <p dangerouslySetInnerHTML={{ __html: item.question }} />
            <p className="text-success">✅ Правильна: <span dangerouslySetInnerHTML={{ __html: item.correct }} /></p>
            <p className={item.user === item.correct ? "text-success" : "text-danger"}>
              {item.user === item.correct ? "🎉 Ваша відповідь була правильною" : "❌ Ваша відповідь була неправильна"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewPage;
