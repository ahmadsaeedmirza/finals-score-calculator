import React, { useState } from 'react'
import './../index.css'
import QuizOne from './QuizOne'

const Assignment = ({ setAssignmentTotal }) => {

    const assignmentWeight = 10/4;
    
    const [assignments, setAssignments] = useState([
        { obtained: '', total: 10 },
        { obtained: '', total: 10 },
        { obtained: '', total: 10 },
        { obtained: '', total: 10 },
  ])
    
    const handleChange = (index, field, value) => {
        const newAssignments = [...assignments]
        newAssignments[index][field] = value
        setAssignments(newAssignments)
    
        // calculate total weighted
        const totalWeighted = newAssignments.reduce((sum, q) => {
          const obtained = parseFloat(q.obtained) || 0
          const total = parseFloat(q.total) || 1
          return sum + (obtained / total) * assignmentWeight
        }, 0)
    
        // send it up to parent
        setAssignmentTotal(totalWeighted)
        }

  return (
    <div className='flex flex-col'> 
        <div className='flex-1 rounded-lg bg-[#111827] p-4'>
            <h3 className="text-xl font-teachers font-bold mb-4 text-[#E5D4A3]">Assignments</h3>

            {assignments.map((assignment, i) => (
                <QuizOne
                    key={i}
                    title="Assignment"
                    number={i + 1}
                    onChange={(field, value) => handleChange(i, field, value)}
                />
            ))}

        </div>
    </div>
  )
}

export default Assignment