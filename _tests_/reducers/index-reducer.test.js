import rootReducer from './../../src/reducers/index';
import selectedTaskReducer from './../../src/reducers/selected-task-reducer';
import taskListReducer from './../../src/reducers/task-list-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterTaskList: {},
      selectedTask: {}
    });
  });

  test('Should contain taskListReducer logic', () => {
    expect(store.getState().masterTaskList).toEqual(taskListReducer(undefined, { type: null }));
  });

  test('Should contain selectedTaskReducer logic', () => {
    expect(store.getState().selectedTask).toEqual(selectedTaskReducer(undefined, { type: null }));
  });

});
