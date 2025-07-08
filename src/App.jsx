import React, { useState } from "react";
import style from "./App.module.css";
import CalcInput from "./Components/CalcInput";
import ButtonContainer from "./Components/ButtonContainer";
export default function App() {

let [currentcalval,setCurrentcalval]=useState("");

  const onButtonClick=(buttonText)=>{
   if(buttonText==='C'){
        setCurrentcalval("")
   }else if(buttonText==='='){
            const result=eval(currentcalval);
            setCurrentcalval(result);
   }else{
    let newDisplayValue=currentcalval+buttonText;
    setCurrentcalval(newDisplayValue);
   }
  }

  return (
    <div className={style.claculator_conatiner}>
     <CalcInput calcval={currentcalval}/>
      <ButtonContainer onButtonClick={onButtonClick}/>
          
    </div>
  );
}
