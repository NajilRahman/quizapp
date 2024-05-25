import React from 'react'

function Navbar() {
  return (

      <nav className="navbar text-light bg-dark" style={{color:"white"}}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img style={{borderRadius:"10px",marginLeft:"20px"}} src="https://img.freepik.com/premium-vector/quiz-logo-with-speech-bubble-symbols-concept-questionnaire-show-sing-quiz-button-question-competition-exam-interview-modern-emblem_180786-72.jpg?w=740" alt="Logo" borderRadius="50" width="50" height="40" className="d-inline-block align-text-top"/>
    <span style= {{color:"white",margin:"15px",paddingBottom:"20px"}}> Quizz App</span>
    </a>
  </div>
</nav>
    
  )
}

export default Navbar
