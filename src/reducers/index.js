import selectedTaskReducer from './selected-task-reducer';
import taskListReducer from './task-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  selectedTask: selectedTaskReducer,
  masterTaskList: taskListReducer
});

export default rootReducer;
