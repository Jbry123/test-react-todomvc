import React, { Component } from 'react';
import TodoItems from './TodoItem'; 
import '../style/TodoList.css';


export default class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
  }

  addItem(e) {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this._inputElement.value = "";
    }

    console.log(this.state.items);

    e.preventDefault();
  }


  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a}
              placeholder="enter task" type="text" autofocus="true">
            </input>
            <button type="submit">add</button>
          </form>
        </div>
        <div className="counter1">
          { this.state.items.length === 1 &&
            <h2>
              You have {this.state.items.length} To-Do item.
            </h2>
          }
          { this.state.items.length > 1 &&
          <h2>
            you have {this.state.items.length} To-Do items.
          </h2>
          }
                    <h1 className="BigBro">
            {this.state.items.length}
            </h1>
        </div>
        <TodoItems entries={this.state.items} />
      </div>
    );
  }
};
