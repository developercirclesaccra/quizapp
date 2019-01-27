import React from 'react';

export default Home => {
  return (
    <div>
      <div className='header'>
        <img src='https://i.postimg.cc/3rBgrrNY/Dev-Quiz-2.png' width='150px' alt='DevC Accra Logo' />
      </div>
      <div className='content'>
        <h3>Choose a topic to test your knowledge</h3>
        <div className="row">
          <div className="column">
            <div className="card">
              <p>icon</p>
              <h3>Linux Commands</h3>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <p>icon</p>
              <h3>Git</h3>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <p>icon</p>
              <h3>HTML</h3>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <p>icon</p>
              <h3>CSS</h3>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <p>icon</p>
              <h3>JavaScript</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}