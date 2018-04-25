import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

function TaskList(props){
  return (
    <div>
      <hr/>
      {props.taskList.map((task) =>
        <Task names={task.names}
          area={task.area}
          job={task.job}
          formattedWaitTime={task.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          key={task.id}/>
      )}
    </div>
  );
}

TaskList.propTypes = {
  taskList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default TaskList;
