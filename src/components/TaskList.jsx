import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

function TaskList(props){
  return (
    <div>
      <hr/>
      {props.taskList.map((task, index) =>
        <Task names={task.names}
          location={task.location}
          job={task.job}
          key={index}/>
      )}
    </div>
  );
}

TaskList.propTypes = {
  taskList: PropTypes.array
};

export default TaskList;
