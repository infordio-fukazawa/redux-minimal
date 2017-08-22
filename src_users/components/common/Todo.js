import React from "react";

const Todo = ({ todo }) => {
  return (
    <tr>
      <td>{todo.id}</td>
      <td>{todo.label}</td>
      <td>{todo.remarks}</td>
    </tr>
  );
}

export default Todo;