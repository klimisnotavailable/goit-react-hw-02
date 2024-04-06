import Description from "./components/Description/Description"
import Options from "./components/Options/Options"
import Feedback from "./components/Feedback/Feedback"
import { useState } from "react"


function App() {

  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })
  
  const updateGood = () => {
    setFeedback({
      good: feedback.good += 1,
      ...feedback
    });
  }

    const updateBad = () => {
      setFeedback({
    ...feedback,
     bad: feedback.bad += 1
    });
    }
  
      const updateNeutral = () => {
      setFeedback({
    ...feedback,
     neutral: feedback.neutral += 1
    });
  }



  console.log(feedback)
    return <>
      <Description></Description>
      <Options updateGood={updateGood} updateBad={updateBad } updateNeutral={updateNeutral}></Options>
      <Feedback feedback={feedback}></Feedback>
    </>
  
  }


export default App
