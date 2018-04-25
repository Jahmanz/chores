import Moment from 'moment';
import React from 'react';
import PropTypes from 'prop-types';

function Task(props){
  const taskInformation =
    <div>
      <style global jsx>{`
        div {
          background-color: beige;
        }
        `}</style>
      <h3>{props.area} - {props.names}</h3>
      <h4>{props.formattedWaitTime}</h4>
      <hr/>
    </div>;
  if (props.currentRouterPath === '/edittask'){
    return (
      <div onClick={() => {props.onTaskSelection({names: props.names, area: props.area, job: props.job, formattedWaitTime: props.formattedWaitTime});}}>
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
  onTaskSelection: PropTypes.func
};

export default Task;
