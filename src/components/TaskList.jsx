import React from 'react';
import Task from './Task';
import PropTypes from 'prop-types';

function TaskList(props){
  return (
    <div>
      <style global jsx>{`
        div {
          background-color: #e0b18b;
        }
        `}</style>
        <hr/>
        {Object.keys(props.taskList).map(function(taskId) {
          var task = props.taskList[taskId];
          return <Task names={task.names}
            area={task.area}
            job={task.job}
            formattedWaitTime={task.formattedWaitTime}
            currentRouterPath={props.currentRouterPath}
            key={taskId}
            taskId={taskId} />;
        })}
      </div>
    );
  }

  TaskList.propTypes = {
    taskList: PropTypes.object,
    currentRouterPath: PropTypes.string
  };

  export default TaskList;
