import './App.css'
import React, { useState } from 'react';

function App() {
  const [content1, setContent1Visible] = useState(false);
  const [content2, setContent2Visible] = useState(false);
  const [content3, setContent3Visible] = useState(false);


  const openAnswer1 = () => {
    setContent1Visible((prevContent1) => !prevContent1)
  }

  const openAnswer2 = () => {
    setContent2Visible((prevContent2) => !prevContent2)
  }

  const openAnswer3 = () => {
    setContent3Visible((prevContent3) => !prevContent3)
  }

  return (
    <div className="accordion">
      <div className="accordion-item">
        <h2>What is programming?</h2>
        <button className="toggle-content" onClick={openAnswer1}>+</button>
        {content1 && (
          <p className="content1">The process of writing instructions that a computer can understand and execute.</p>
        )}
      </div>
    <div className="accordion-item">
        <h2>What is Front-end engineering?</h2>
        <button className="toggle-content" onClick={openAnswer2}>+</button>
        {content2 && (
          <p className="content2">It focuses on building the user-facing parts of websites and web applications.</p>
        )}
        
    </div>
    <div className="accordion-item">
        <h2>What is Back-end engineering?</h2>
        {content3 && (
          <p className="content3">Focuses on the server-side of web development, dealing with the behind-the-scenes logic.</p>
        )}
        <button className="toggle-content" onClick={openAnswer3}>+</button>
    </div>
  </div>
  )
}

export default App
