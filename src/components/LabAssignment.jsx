import React, { useState } from 'react'
import './../index.css'
import QuizOne from './QuizOne'

const LabAssignment = ({ setLabAssignmentTotal }) => {

    const labAssignmentWeight = 10/4;
        
        const [labAssignments, setLabAssignments] = useState([
            { obtained: '', total: 10 },
            { obtained: '', total: 10 },
            { obtained: '', total: 10 },
            { obtained: '', total: 10 },
      ])
        
        const handleChange = (index, field, value) => {
            const newLabAssignments = [...labAssignments]
            newLabAssignments[index][field] = value
            setLabAssignments(newLabAssignments)
        
            // calculate total weighted
            const totalWeighted = newLabAssignments.reduce((sum, q) => {
              const obtained = parseFloat(q.obtained) || 0
              const total = parseFloat(q.total) || 1
              return sum + (obtained / total) * labAssignmentWeight
            }, 0)
        
            // send it up to parent
            setLabAssignmentTotal(totalWeighted)
            }

  return (
    <div className='flex flex-col'> 
        <div className='flex-1 rounded-lg bg-[#111827] p-4'>
            <h3 className="text-xl font-teachers font-bold mb-4 text-[#E5D4A3]">Lab Assignments (if any)</h3>

            {labAssignments.map((labAssignment, i) => (
                <QuizOne
                    key={i}
                    title="Lab Assignment"
                    number={i + 1}
                    onChange={(field, value) => handleChange(i, field, value)}
                />
            ))}

        </div>
    </div>
  )
}

export default LabAssignment