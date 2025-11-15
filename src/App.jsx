import React, { useState } from 'react'
import './App.css'
import './index.css'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CourseDetails from './components/CourseDetails'
import Quiz from './components/Quiz'
import Assignment from './components/Assignment'
import LabAssignment from './components/LabAssignment'
import Mids from './components/Mids'
import Header from './components/Header';
import GradingCriteria from './components/GradingCriteria';
import Footer from './components/Footer';
import Result from './components/Result';

function App() {

  const [quizTotal, setQuizTotal] = useState(0)
  const [assignmentTotal, setAssignmentTotal] = useState(0)
  const [labAssignmentTotal, setLabAssignmentTotal] = useState(0)
  const [theoryCredit, setTheoryCredit] = useState(0)
  const [labCredit, setLabCredit] = useState(0)
  const [midsTotal, setMidsTotal] = useState(0)
  const [labMidsTotal, setLabMidTotal] = useState(0)
  const [labFinalTotal, setLabFinalTotal] = useState(0)

  const [a, setA] = useState(0);
  const [aMinus, setAMinus] = useState(0);
  const [bPlus, setBPlus] = useState(0);
  const [b, setB] = useState(0);
  const [bMinus, setBMinus] = useState(0);
  const [cPlus, setCPlus] = useState(0);
  const [c, setC] = useState(0);
  const [cMinus, setCMinus] = useState(0);

  const handleClick = () => {
    if (labCredit === 0) {
      var obtained = assignmentTotal + quizTotal + midsTotal;
      setA(85 - obtained); //out of 50
      setAMinus(80 - obtained);
      setBPlus(75 - obtained);
      setB(71 - obtained);
      setBMinus(68 - obtained);
      setCPlus(64 - obtained);
      setC(61 - obtained);
      setCMinus(58 - obtained);
      // console.log(need);
    } else if (theoryCredit === 2 && labCredit === 1) {
      const TheoryKnown = assignmentTotal + quizTotal + midsTotal;
      const LabTotal = labAssignmentTotal + labMidsTotal + labFinalTotal;
      setA(3 * (85 - (1/3 * LabTotal) - (2/3 * TheoryKnown)));
      setAMinus(3 * (80 - (1/3 * LabTotal) - (2/3 * TheoryKnown)));
      setBPlus(3 * (75 - (1/3 * LabTotal) - (2/3 * TheoryKnown)));
      setB(3 * (71 - (1/3 * LabTotal) - (2/3 * TheoryKnown)));
      setBMinus(3 * (68 - (1/3 * LabTotal) - (2/3 * TheoryKnown)));
      setCPlus(3 * (64 - (1/3 * LabTotal) - (2/3 * TheoryKnown)));
      setC(3 * (61 - (1/3 * LabTotal) - (2/3 * TheoryKnown)));
      setCMinus(3 * (58 - (1/3 * LabTotal) - (2/3 * TheoryKnown)));
      // console.log("You need in Theory Final:", need);
    } else if (theoryCredit === 3 && labCredit === 1) {
      const TheoryKnown = assignmentTotal + quizTotal + midsTotal;
      const LabTotal = labAssignmentTotal + labMidsTotal + labFinalTotal;
      setA((85 - 0.25 * LabTotal - 0.75 * TheoryKnown) / 0.375);
      setAMinus((80 - 0.25 * LabTotal - 0.75 * TheoryKnown) / 0.375);
      setBPlus((75 - 0.25 * LabTotal - 0.75 * TheoryKnown) / 0.375);
      setB((71 - 0.25 * LabTotal - 0.75 * TheoryKnown) / 0.375);
      setBMinus((68 - 0.25 * LabTotal - 0.75 * TheoryKnown) / 0.375);
      setCPlus((64 - 0.25 * LabTotal - 0.75 * TheoryKnown) / 0.375);
      setC((61 - 0.25 * LabTotal - 0.75 * TheoryKnown) / 0.375);
      setCMinus((58 - 0.25 * LabTotal - 0.75 * TheoryKnown) / 0.375);
      // console.log("You need in Theory Final for A:", need85);
    }
  }

  return (
    <>
      <Header />

      <div className="px-4 md:px-8 py-8 md:py-10">
        <h1 className='font-teachers text-3xl sm:text-4xl lg:text-5xl text-[#F5E6C8] font-bold py-5'>Calculate How Much You Need in the Finals</h1>
        <h1 className='font-teachers text-lg sm:text-xl lg:text-xl text-[#F5E6C8] pb-5'>Enter all your data to calculate the minimun score you need <br/> to get in Finals to get your desired grade</h1>
      </div>

      <CourseDetails setTheoryCredit={setTheoryCredit} setLabCredit={setLabCredit} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch px-4 md:px-8 py-8">
        <Quiz setQuizTotal={setQuizTotal} />
        <Assignment setAssignmentTotal={setAssignmentTotal} />
        <LabAssignment setLabAssignmentTotal={setLabAssignmentTotal} />
        <Mids setMidsTotal={setMidsTotal} setLabMidTotal={setLabMidTotal} setLabFinalTotal={setLabFinalTotal} />
      </div>

      <div className="px-4 md:px-8 flex justify-end">
        <button onClick={handleClick} className='font-teachers font-bold text-lg px-5 py-2 border-2 border-[#E5D4A3] bg-[#0D1117] text-[#E5D4A3] rounded-md' >Calculate</button> 
      </div>

      <Result a={a} aMinus={aMinus} bPlus={bPlus} b={b} bMinus={bMinus} cPlus={cPlus} c={c} cMinus={cMinus}/>
      <GradingCriteria />
      <Footer />

    </>
  )
}

export default App
