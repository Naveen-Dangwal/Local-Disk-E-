import styles from './App.module.css';
import ButtonsContainer from './Components/ButtonsContainer';
import Display from './Components/Display';
import {useState} from "react";

function App() {
  const [calVal,setCalVal]=useState(""); 
  const onButtonClick=(buttonText)=>{
    if(buttonText==='C'){
      setCalVal('');

    }
    else if(buttonText=== '='){
      setCalVal(eval(calVal));

    }
    else{
      const newDisplayValue=calVal+buttonText;
      setCalVal(newDisplayValue);
    }

    
  }

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}/>
      <ButtonsContainer
      onButtonClick={onButtonClick}/>
    </div>
  )
}

export default App
