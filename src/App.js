import React from 'react';
import logo from './logo.svg';
import './App.css';

//Components
import Button from './components/Button'
import Counter from './components/Counter'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    console.log('component montado!!!!');
    console.log(this.state.counter);
  }

  incrementCounter = () => this.setState({
    counter: this.state.counter + 1
  })  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Counter counter={this.state.counter} />
          <p><Button increment={this.incrementCounter} /></p>
        </header>
      </div>
    );
  }
}

export default App;
