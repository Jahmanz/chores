import React from 'react';
import PropTypes from 'prop-types';

function ConfirmationQuestions(props){
  return (
    <div>
      <style global jsx>{`
        div {
          background-color: #e0b18b;
        }
        `}</style>
      <p>Sure you want to add a job?</p>
      <button onClick={props.onConfirmation}>Yes</button>
    </div>
  );
}

ConfirmationQuestions.propTypes = {
  onConfirmation: PropTypes.func
};

export default ConfirmationQuestions;
