
import React from 'react';
import PropTypes from 'prop-types';

function Task(props){
  return (
    <div>
      <style global jsx>{`
        div {
          background-color: beige;
        }
        `}</style>
        <h3>{props.location} - {props.names}</h3>
          <p><em>{props.job}</em></p>
            <hr/>
            </div>
          );
        }

        Task.propTypes = {
          names: PropTypes.string.isRequired,
          location: PropTypes.string.isRequired,
          job: PropTypes.string
        };

        export default Task;
