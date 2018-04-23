import React from 'react';
import PropTypes from 'prop-types';

function NewTaskForm(props) {
  let _names = null;
  let _location = null;
  let _job = null;

  function handleNewTaskFormSubmission(event) {
    event.preventDefault();
    props.onNewTaskCreation({names: _names.value, location: _location.value, job: _job.value});
    _names.value = '';
    _location.value = '';
    _job.value = '';

  }

  return (
    <div>
      <form onSubmit={handleNewTaskFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Assign someone for task'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='location'
          placeholder='Location'
          ref={(input) => {_location = input;}}/>
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
