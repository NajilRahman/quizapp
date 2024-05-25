import React from 'react'

function Qustions(props) {
  return (
    <>
      <textarea className='container' style={{width:"90%",height:"10vh",marginTop:"20px", borderRadius:"10px" ,border:"2px solid grey"}}disabled>{props.qna}</textarea>
    </>
  )
}

export default Qustions
