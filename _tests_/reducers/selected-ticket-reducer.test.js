import selectedTaskReducer from './../../src/reducers/selected-task-reducer';

describe("selectedTaskReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedTaskReducer({}, { type: null })).toEqual({});
  });

  test('Should record which task has been selected by user', () => {
    expect(selectedTaskReducer({}, { type: 'SELECT_TASK', taskId: 1 })).toEqual(1);
  });

});
