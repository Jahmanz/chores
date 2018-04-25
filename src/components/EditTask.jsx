import React from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';

function EditTask(props){
  return (
    <div>
      <h2>EditTask</h2>
      <TaskDetail />
      <TaskList
        taskList={props.taskList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

EditTask.propTypes = {
  taskList: PropTypes.array,
  currentRouterPath: PropTypes.string.isRequired
};

export default EditTask;
