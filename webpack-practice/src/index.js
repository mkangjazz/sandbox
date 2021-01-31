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
        <h2>{this.props.title}</h2>
        <p>{this.props.message}</p>
      </div>
    );
  }
}

ReactDOM.render(
  <Message
    title="React Component Title"
    message="React Component Message"
  >
  </Message>,
  document.getElementById('react-app')
);
