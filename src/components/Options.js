import React, { useState,useEffect} from 'react'
import axios from 'axios'
function Options() {
  var audio=new Audio("https://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Sevish_-__nbsp_.mp3");
  const [checked,setChecked]=useState();
  const [resData,setResData]=useState({
  question: '',
  ans1: '',
  ans2: '',
  ans3: '',
  ans4: '',
  crctans: '',
  __v:1  
});
  const[qno,setQno]=useState(1)
  const [mark,setMark]=useState(0)
  const [clicked,setClicked]=useState()

 const funans=(e)=>{
  e.preventDefault()
  setChecked(e.target.value);
  if(e.target.value===resData.crctans){
    setClicked('green')
      document.getElementById(e.target.id).style.background=clicked;
      setMark(mark+1)
    }
    else{
      setClicked('red')
      document.getElementById(e.target.id).style.background=clicked;
    }
 }
  const funsub=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:8000/add',{checked:checked,qno:qno})
    .then(add=>{
      console.log("data sended to express")
      setResData(add.data.data[0])
      if(qno==1)
        {
          audio.play()
        }
      if(qno<=9)
        {
          setClicked('white')
          setQno(qno+1)
        }
        else{
          alert("your Score is : "+mark)
          setQno(1)
          audio.muted()
        }
      
      console.log(add.data.data[0])
    })
    .catch(err=>{
      console.log("error")
    })
  }
  return (
    <>
    <textarea className='container' style={{width:"90%",height:"10vh",marginTop:"20px", borderRadius:"10px" ,border:"2px solid grey",}} value={resData.question}  disabled></textarea>
    <form onSubmit={funsub} >
    <div className='container row' style={{width:"90%",height:"auto",borderRadius:"10px",border:"2px sold grey",gap:"3vh",marginTop:"7vh"}} >
        <input type='button' className='container col-12' style={{width:"100vw",height:"10vh",borderRadius:"10px",border:"2px sold grey",marginLeft:"5vw" ,background:`${clicked}`}}  id='ans1' value={resData.ans1} onClick={funans}/>
        <input type='button' className='container col-12' style={{width:"100vw",height:"10vh",borderRadius:"10px",border:"2px sold grey",marginLeft:"5vw" ,background:`${clicked}` }}  id='ans2' value={resData.ans2} onClick={funans} />
        <input type='button' className='container col-12' style={{width:"100vw",height:"10vh",borderRadius:"10px",border:"2px sold grey",marginLeft:"5vw"  ,background:`${clicked}`}}  id='ans3' value={resData.ans3} onClick={funans}/>
        <input type='button' className='container col-12' style={{width:"100vw",height:"10vh",borderRadius:"10px",border:"2px sold grey",marginLeft:"5vw" ,background:`${clicked}` }}  id='ans4' value={resData.ans4} onClick={funans}/>
        <input type='submit' value={qno===1 ? "Start" :qno===10? "Get Result" : "Next"}style={{width:"100vw",height:"6vh",borderRadius:"10px",border:"2px sold grey",marginLeft:"5vw",background:"green"}}></input>
    </div>
    </form>
    </>
  )
}

export default Options
