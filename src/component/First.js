// import React, { Component } from 'react';
// import "./Style.css"
// class First extends Component {
//     render() {
//         return (
//             <div>
//                 HELO
//             </div>
//         );
//     }
// }

//
import React, { useState } from "react";
import "./Style.css";
const First = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();

    setTodos((currentTodos) => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(), // to give unique number in webserver
          title: newItem,
          completed: false,
        },
      ];
    });
    setNewItem("");
  }
  function handleDelete(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  function toggleTodo(id, completed) {
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        //checks if the id is there or not
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }
  console.log(todos);
  return (
    // <div>Hllo</div>
    <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <label htmlFor="item">New Item</label>
        <input
          type="text"
          id="item"
          value={newItem} // this will take
          onChange={(e) => setNewItem(e.target.value)} // to take value adn to update
        />
        <button className="btn">Add</button>
      </form>

      <h1 className="header">To do list</h1>
      <ul className="list">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                {todo.title}
              </label>
              <button
                className="btn btn danger"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default First;
