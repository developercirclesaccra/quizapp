import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home';

export default class DevQuiz extends React.Component {
  render() {
    return(
     <Home />
    )
  }
}

ReactDOM.render(<DevQuiz />, document.getElementById('root'));