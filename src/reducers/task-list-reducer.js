export default (state = {}, action) => {
  switch (action.type) {
  case 'ADD_TASK':
    const { names, area, job, timeOpen, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        names: names,
        area: area,
        job: job,
        timeOpen: timeOpen,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
