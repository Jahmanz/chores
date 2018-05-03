import React from 'react';
import PropTypes from 'prop-types';
import TaskList from './TaskList';
import TaskDetail from './TaskDetail';
import { connect } from 'react-redux';

function EditTask(props){
  let optionalSelectedTaskContent = null;
  if (props.selectedTask.length > 0){
    optionalSelectedTaskContent =  <TaskDetail selectedTask={props.taskList[props.selectedTask]}/>;
  }
  return (
    <div>
      <h2>Edit Task</h2>
      {optionalSelectedTaskContent}
      <TaskList
        taskList={props.taskList}
        currentRouterPath={props.currentRouterPath} />
    </div>
  );
}

EditTask.propTypes = {
  taskList: PropTypes.object,
  currentRouterPath: PropTypes.string.isRequired,
  selectedTask: PropTypes.string
};

const mapStateToProps = state => {
  return {
    selectedTask: state.selectedTask,
    taskList: state.masterTaskList
  };
};

export default connect(mapStateToProps)(EditTask);
