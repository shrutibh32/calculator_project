import React from 'react'
import style from "./CalcInput.module.css";
export default function CalcInput({calcval}) {
  return (
     <input type="text" className={style.input_conatiner}  value={calcval} readOnly/>
  )
}
