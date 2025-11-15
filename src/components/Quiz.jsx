import React, { useState } from 'react'
import './../index.css'
import QuizOne from './QuizOne'

const Quiz = ({ setQuizTotal }) => {

    const quizWeight = 15/4;

    const [quizzes, setQuizzes] = useState([
    { obtained: '', total: 10 },
    { obtained: '', total: 10 },
    { obtained: '', total: 10 },
    { obtained: '', total: 10 },
  ])

  const handleChange = (index, field, value) => {
  const newQuizzes = [...quizzes];
  newQuizzes[index][field] = Number(value); // convert to number
  setQuizzes(newQuizzes);

  // calculate weighted sum correctly
  const totalWeighted = newQuizzes.reduce((sum, q) => {
    if (!q.total || q.total === 0) return sum; // avoid division by zero
    return sum + (q.obtained / q.total) * quizWeight;
  }, 0);

  setQuizTotal(totalWeighted);
};


  return (
    <div className='flex flex-col'> 
        <div className='flex-1 rounded-lg bg-[#111827] p-4'>
            <h3 className="text-xl font-teachers font-bold mb-4 text-[#E5D4A3]">Quizzes</h3>

            {quizzes.map((quiz, i) => (
                <QuizOne
                    key={i}
                    title="Quiz"
                    number={i + 1}
                    onChange={(field, value) => handleChange(i, field, value)}
                />
            ))}

        </div>
    </div>
  )
}

export default Quiz