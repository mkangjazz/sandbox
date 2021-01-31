import './styles.scss';
import imgSrc from './sea-turtle.jpg';

import _ from 'lodash';

function webpackComponent() {
  const div = document.createElement('div');
  const p = document.createElement('p');

  p.innerHTML = _.join(['Hello World Watcher', 'webpack'], ' ');

  div.appendChild(p);

  return div;
}

document.getElementById('webpack-component').appendChild(webpackComponent());

function imgTurtle() {
  var img = document.createElement('img');

  img.src = imgSrc;

  return img;
}

document.getElementById('webpack-component').appendChild(imgTurtle());

var React = require('React');
var ReactDOM = require('react-dom');

class Message extends React.Component {
  render() {
    return (
      <div className="react-component">
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Message
    title="Email Joe"
    message="Can you email him?"
  />,
  document.getElementById('react-app')
);
