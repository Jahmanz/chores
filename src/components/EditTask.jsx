import React from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';

function EditTask(props){
  let optionalSelectedTaskContent = null;
  if (props.selectedTask != null){
    optionalSelectedTaskContent =  <TaskDetail selectedTask={props.selectedTask}/>;
  }
  return (
    <div>
      <h2>EditTask</h2>
      {optionalSelectedTaskContent}
      <TaskList
        taskList={props.taskList}
        currentRouterPath={props.currentRouterPath}
        onTaskSelection={props.onTaskSelection}/>
    </div>
  );
}


EditTask.propTypes = {
  taskList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired,
  onTaskSelection: PropTypes.func.isRequired,
  selectedTask: PropTypes.object
};

export default EditTask;
