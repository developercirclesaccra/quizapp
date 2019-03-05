import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css'
import './index.css';

import Home from './home';

export default class DevQuiz extends React.Component {
  render() {
    return(
     <Home />
    )
  }
}

ReactDOM.render(<DevQuiz />, document.getElementById('root'));