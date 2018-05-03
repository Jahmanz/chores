import Moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

  function Task(props){

  function handleSavingSelectedTask(taskId){
    const { dispatch } = props;
    const action = {
      type: 'SELECT_TASK',
      taskId: taskId
    };
    dispatch(action);
  }

  const taskInformation =
    <div>
      <style global jsx>{`
        div {
          background-color: #e0b18b;
        }
        `}</style>
      <h4><bold>{props.names}</bold></h4>
      <h3>{props.area} - {props.job}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/edittask'){
    return (
      <div onClick={() => {handleSavingSelectedTask(props.taskId);}}>
  {taskInformation}
</div>
    );
  } else {
    return (
      <div>
        {taskInformation}
      </div>
    );
  }
}

Task.propTypes = {
  names: PropTypes.string.isRequired,
  area: PropTypes.string.isRequired,
  job: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string,
  taskId: PropTypes.string.isRequired
};

export default connect()(Task);
