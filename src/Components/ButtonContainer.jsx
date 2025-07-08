import React from 'react'
import style from './ButtonContainer.module.css'
export default function ButtonContainer({onButtonClick}) {


const buttonList=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.'];

  return (
          <div className={style.button_container}>
            {buttonList.map(buttonItem=>
                 <button className={style.buttons} key={buttonItem} onClick={()=>onButtonClick(buttonItem)}>{buttonItem}</button>
            )}
         
          {/* <button className={style.buttons}>1</button>
          <button className={style.buttons}>2</button> */}
      </div>
  )
}
