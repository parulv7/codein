import React, { useState } from 'react'
import {questiondata} from "../JSON/Info"
import './Main.css'
import Com from '../last/Com';
const Main = () => {
    const [selected, setSelected] = useState(0);
    // const [clickOption, setClickOption] = useState(0)
    const [lastPage, setLastPage] =useState(false);
const tLength = questiondata.length;
// const value = props.{questiondata[4].id}
  return (
   <main>
   <div className='heading'>Customer Survey</div>
   {/* {setLastPage ?(
    <Com/>
   )} : { <> */}
<div className='box'>
<span className='type'>
{questiondata[selected].type}
</span>
<div className='que'>{questiondata[selected].que}</div>
<div className='rating'>
  <button className='single'>{questiondata[selected].r1} </button>
  <span className='single'>{questiondata[selected].r2} </span>
  <span className='single'>{questiondata[selected].r3} </span>
  <span className='single'>{questiondata[selected].r4} </span>
  <span className='single'>{questiondata[selected].r5} </span>
  {/* <span className='single'>{questiondata[selected].r6} </span>
  <span className='single'>{questiondata[selected].r7} </span>
  <span className='single'>{questiondata[selected].r8} </span>
  <span className='single'>{questiondata[selected].r9} </span>
  <span className='single'>{questiondata[selected].r10} </span> */}
</div>

  {/* <input placeholder={questiondata[selected].ph} type={questiondata[4].type} /> */}

   
    <span className='btn'>
        <button className='prev'
         onClick={()=>{
            //   selected===0?setSelected(tLength -1) :
            selected===0?setSelected(0) :
              setSelected((prev)=> prev-1);
            }}
        >Prev</button>
        <button className='next'
        onClick={()=>{
              selected=== tLength -1 
              ? setSelected(tLength -1) && setLastPage(true)  :
              setSelected((prev)=> prev+1);
        }}
        >Next</button>
    </span>
    <div className='com'>
      {questiondata[selected].value}
    </div>
    
</div>

   </main>
  )
}

export default Main