import React from 'react';

export default Home => {
  return (
    <div>
      <div className='content'>
        <h1 className='content-p'>Choose a topic to test your knowledge</h1>
        <div className="row">
          <div className="column">
            <div className="card">
              <p><i className='fa fa-terminal fa-2x'></i></p>
              <h2>Linux Commands</h2>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <p><i className='fa fa-git-square fa-2x'></i></p>
              <h2>Git</h2>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <p><i className='fa fa-html5 fa-2x'></i></p>
              <h2>HTML</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="column">
            <div className="card">
              <p><i className='fa fa-css3 fa-2x'></i></p>
              <h2>CSS</h2>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <p><i className='fa fa-code fa-2x'></i></p>
              <h2>JavaScript</h2>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <p><i className='fa fa-code fa-2x'></i></p>
              <h2>Python</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}