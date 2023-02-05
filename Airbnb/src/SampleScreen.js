import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {color: 'green'};
  }
  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    console.log('componentDidMount');
  }

  render() {
    console.log('render');
    return (
      <div>
        <button onClick={() => this.setState({color: 'aaaaa'})}>Submit</button>
        <p>{this.state.color}</p>
      </div>
    );
  }

  componentWillUnmount() {
    console.log('componentDidMount');
  }
}
class SampleScreen extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Demo />
        <p className="App-intro"></p>
      </div>
    );
  }
}

export default App;
