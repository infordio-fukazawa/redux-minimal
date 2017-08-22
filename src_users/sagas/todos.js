import { call, put } from "redux-saga/effects";
import ApiTodos from "../api/todos";

export function* todosFetchList(action) {
  // call the api to get the users list
  const todos = yield call(ApiTodos.getList);

  // save the users in state
  yield put({
    type: 'TODOS_LIST_SAVE',
    todos: todos,
  });
}