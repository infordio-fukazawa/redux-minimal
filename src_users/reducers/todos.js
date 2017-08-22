// users reducer
export default function todos(state = {}, action) {
  switch (action.type) {

    case 'TODOS_LIST_SAVE':
      return action.todos;

    // initial state
    default:
      return state;
  }
}