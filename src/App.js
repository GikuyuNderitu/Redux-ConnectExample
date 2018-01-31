import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { addNameToState } from './state/actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <form onSubmit={(e) => {
            e.preventDefault();

            this.props.addName(this.state.name)
          }} >
            <input
              onChange={(e) => this.setState({name: e.target.value})}
              value={this.state.name}
              type="text"
              placeholder="Add Name"/>
          </form>
          {this.props.fruits.map((name, idx) => {
            return <p key={idx}>{name}</p>
          })}
        </div>
      </div>
    );
  }
}

const getStateFromReduxPassToAppComponentAsProps = (state) => {
  return {
    fruits: state.names
  }
}

const getDispatchFromReduxPassToAppComponentAsProps = (dispatch) => {
  return {
    addName(name) {
      dispatch(addNameToState(name))
    }
  }
}

export default connect(getStateFromReduxPassToAppComponentAsProps, getDispatchFromReduxPassToAppComponentAsProps)(App);
