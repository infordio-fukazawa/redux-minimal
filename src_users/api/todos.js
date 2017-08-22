import TodoList from '../TodoList';

// API Users static class
export default class ApiTodos {
  // get a list of users
  static getList() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(TodoList);
      }, 1000);
    });
  }

  // add/edit a user
  static addEdit() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 1000);
    });
  }

  // delete a user
  static delete() {
    return new Promise(resolve => {
      setTimeout(() => {
        // do something here
        resolve();
      }, 500);
    });
  }
}
