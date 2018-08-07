import React, { Component } from 'react';
import TodoList from './components/TodoList.jsx';
import Header from './components/Header.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <head>
        <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css" />
      </head>
      <div className="container1">
        <div className="row">
        <Header />
        <TodoList />
        </div>
      </div>
      </div>
    );
  }
}

export default App;
