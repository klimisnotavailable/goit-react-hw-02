import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import { useEffect, useState } from "react";


function App() {

  const [values, setValues] = useState(() => {    
    
    const savedFeedback = JSON.parse(localStorage.getItem("feedback"))

    if (savedFeedback !== null) {
      return savedFeedback
    }

    return{
      good: 0,
      neutral: 0,
      bad:0
    }

  });
  
  const onLeaveFeedback = (option) => {
    setValues({
      ...values,
      [option]: values[option] + 1
    });
  };

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(values))
  }, [values])
  
  const { good, neutral, bad } = values;
  const totalFeedback = bad + good + neutral;
  const positiveFeedback = Math.round((good / totalFeedback) * 100) 

  const resetFeedback = () => {
    setValues({
      good: 0,
      neutral: 0,
      bad:0
    })
  }

  return <>
    <Description></Description>
    <Options feedback={onLeaveFeedback} totalFeedback={totalFeedback} reset={resetFeedback} ></Options>
    <>{totalFeedback === 0 ? <Notification message={"No feedback yet"} /> : <Feedback values={values} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback } />}</>
  </>;
}


export default App;
