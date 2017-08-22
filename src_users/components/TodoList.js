import React from "react";
import { connect } from "react-redux";
import { Table } from "react-bootstrap";
import Todo from './common/Todo';

const TodoList = ({ todos }) => {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>あいでぃ</th>
          <th>なまえ</th>
          <th>ないよう</th>
        </tr>
      </thead>
      <tbody>
        { todos.map( todo => <Todo todo={todo} />)}
      </tbody>
    </Table>
  );
}

// export the connected class
function mapStateToProps(state, own_props) {
  return {
    todos: state.todos || [],
  };
}
export default connect(mapStateToProps)(TodoList);