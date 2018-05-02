import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';
import Moment from 'moment';

function NewTaskForm(props) {
  let _names = null;
  let _area = null;
  let _job = null;

  function handleNewTaskFormSubmission(event) {
    event.preventDefault();
    props.onNewTaskCreation({names: _names.value, area: _area.value, job: _job.value, id: v4(), timeOpen: new Moment()});
    _names.value = '';
    _area.value = '';
    _job.value = '';
  }

  return (
    <div>
      <style global jsx>{`
        div {
          background-color: #e0b18b;
        }
        `}</style>
      <form onSubmit={handleNewTaskFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Assign someone for task'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='area'
          placeholder='area'
          ref={(input) => {_area = input;}}/>
        <textarea
          id='job'
          placeholder='Describe your job.'
          ref={(textarea) => {_job = textarea;}}/>
        <button type='submit'>Add Task!</button>
      </form>
    </div>
  );
}

NewTaskForm.propTypes = {
  onNewTaskCreation: PropTypes.func
};

export default NewTaskForm;
