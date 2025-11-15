import React from 'react'
import './../index.css'

const GradingCriteria = () => {
  return (
    <div className='text-[#E5D4A3] px-4 md:px-8 py-8 '>
      <h3 className="font-teachers font-bold text-2xl pb-3 text-[#E5D4A3]">Grading Criteria:</h3>

        <div className="flex flex-col md:flex-row">

            <div className="flex flex-col w-full md:w-1/2 px-4 text-lg">
              <div className="flex flex-row border-t-2 border-[#E5D4A3] border-b-2">
                <p className="font-teachers text-center font-semibold text-lg w-1/3">GPA</p>
                <p className="font-teachers text-center font-semibold text-lg w-1/3">Grade</p>
                <p className="font-teachers text-center font-semibold text-lg w-1/3">Required</p>
              </div>

              <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
                <p className="font-teachers text-center w-1/3">4.00</p>
                <p className="font-teachers text-center w-1/3">A</p>
                <p className="font-teachers text-center w-1/3">&ge; 85</p>
              </div>

              <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
                <p className="font-teachers text-center w-1/3">3.66</p>
                <p className="font-teachers text-center w-1/3">A-</p>
                <p className="font-teachers text-center w-1/3">80 - 84</p>
              </div>

              <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
                <p className="font-teachers text-center w-1/3">3.33</p>
                <p className="font-teachers text-center w-1/3">B+</p>
                <p className="font-teachers text-center w-1/3">75 - 79</p>
              </div>

              <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
                <p className="font-teachers text-center w-1/3">3.00</p>
                <p className="font-teachers text-center w-1/3">B</p>
                <p className="font-teachers text-center w-1/3">71- 74</p>
              </div>

              <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
                <p className="font-teachers text-center w-1/3">2.66</p>
                <p className="font-teachers text-center w-1/3">B-</p>
                <p className="font-teachers text-center w-1/3">68 - 70</p>
              </div>

              <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
                <p className="font-teachers text-center w-1/3">2.33</p>
                <p className="font-teachers text-center w-1/3">C+</p>
                <p className="font-teachers text-center w-1/3">64 - 67</p>
              </div>

              <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
                <p className="font-teachers text-center w-1/3">2.00</p>
                <p className="font-teachers text-center w-1/3">C</p>
                <p className="font-teachers text-center w-1/3">61 - 63</p>
              </div>

              <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
                <p className="font-teachers text-center w-1/3">1.66</p>
                <p className="font-teachers text-center w-1/3">C-</p>
                <p className="font-teachers text-center w-1/3">58 - 60</p>
              </div>

              <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
                <p className="font-teachers text-center w-1/3">1.30</p>
                <p className="font-teachers text-center w-1/3">D+</p>
                <p className="font-teachers text-center w-1/3">54 - 57</p>
              </div>

              <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
                <p className="font-teachers text-center w-1/3">1.00</p>
                <p className="font-teachers text-center w-1/3">D</p>
                <p className="font-teachers text-center w-1/3">50 - 53</p>
              </div>

              <div className="flex flex-row justify-between border-[#E5D4A3] border-b-2">
                <p className="font-teachers text-center w-1/3">0.00</p>
                <p className="font-teachers text-center w-1/3">F</p>
                <p className="font-teachers text-center w-1/3">Below 50</p>
              </div>

            </div>

            <div className='font-teachers text-[#E5D4A3] w-full md:w-1/2 text-justify font-teachers px-0 md:px-8 pt-8 md:pt-0'>
                <p className='text-2xl font-semibold'>All these calculations are based on the following weightage:</p>
                <ul className='text-xl list-disc list-inside'>
                    <li>Quiz - 15%</li>
                    <li>Assignments - 10%</li>
                    <li>Mids - 25%</li>
                    <li>Finals - 50%</li>
                </ul>
                <p>All these calculations are based on the current grading criteria of COMSATS University. If the university updates its grading policy, I will update the calculations here accordingly.</p>
                <p>Found a bug or facing an error? Let me know so I can resolve it as soon as possible.</p>
            </div>
        </div>
    </div>
  )
}

export default GradingCriteria