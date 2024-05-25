import React from 'react'
import Options from './Options'
function Quiz() {
  return (
    <div className='container' style={{width:"90vw",height:"85vh",border:"2px solid grey",marginTop:"20px",padding:"10px",borderRadius:"10px",overflow:'hidden'}}>
      <Options></Options>
    </div>
  )
}

export default Quiz
