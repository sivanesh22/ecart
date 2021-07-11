import React, { Component } from 'react';
import './App.css';
import Dashboard from './Dashboard';
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {

  render() {


    return (
      <Provider store={store}>
        <div className="App">
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

export default App;
