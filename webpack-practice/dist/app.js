var React = require('React');
var ReactDOM = require('react-dom');

class App extends React.Component {
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
  <App
    title="React Component Title"
    message="A cool app build with React, Webpack, and Magic!"
  />,
  document.getElementById('react-app')
);
