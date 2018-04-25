import React from 'react';
import PropTypes from 'prop-types';

function TaskDetail(props){
  return (
    <div>
      <hr/>
      <h1>{props.selectedTask.names} - {props.selectedTask.area}</h1>
      <h2>Submitted {props.selectedTask.formattedWaitTime} ago</h2>
      <h4><em>{props.selectedTask.job}</em></h4>
      <hr/>
    </div>
  );
}

TaskDetail.propTypes = {
  selectedTask: PropTypes.object
};

export default TaskDetail;
