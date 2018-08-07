import React, { Component } from 'react';

class TodoItems extends Component {

// the destroy function i wanted to make

  createTasks = (item) => { // i wanted to add a onClick={destroy} function, but i couldnt figure out in time how to connect it to deleting the state in the TodoList, where the entries are stored.
  return (
      <div class="container">
        <li class="animated infinite pulse delay-2s" key={item.key}>
          <input type="checkbox" name="recruiter_contact" id="checkBox" value="ON" /><label for='chk_recruiter_contact'></label>
          <button class="delete">X</button>
          {item.text}
        </li>
      </div>
    )
  };

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }
};

export default TodoItems;