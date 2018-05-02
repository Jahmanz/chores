import taskListReducer from './../../src/reducers/task-list-reducer';

describe('taskListReducer', () => {

  let action;
  const sampleTaskData = {
    names : 'Ryan & Aimen',
    area : '4b',
    job : 'Jest is being a diva and won\'t work with Webpack!',
    timeOpen : 1500000000000,
    id: 0
  };

  test('Should return default state if no action type is recognized', () => {
    expect(taskListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new task data to masterTaskList', () => {
    const { names, area, job, timeOpen, id } = sampleTaskData;
    action = {
      type: 'ADD_TICKET',
      names: names,
      area: area,
      job: job,
      timeOpen: timeOpen,
      id: id
    };
    expect(taskListReducer({}, action)).toEqual({
      [id] : {
        names: names,
        area: area,
        job: job,
        timeOpen: timeOpen,
        id: id
      }
    });
  });

});
