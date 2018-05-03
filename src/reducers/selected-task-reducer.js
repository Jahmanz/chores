export default (state = {}, action) => {
  switch (action.type) {
  case 'SELECT_TASK':
    return action.taskId;
  default:
    return state;
  }
};
