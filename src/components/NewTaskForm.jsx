import React from 'react';
import Moment from 'moment';
import { connect } from 'react-redux';
import { v4 } from 'uuid';


function NewTaskForm(props){
  let _names = null;
  let _area = null;
  let _job = null;

  function handleNewTaskFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_TASK',
      id: v4(),

      names: _names.value,
      area: _area.value,
      job: _job.value,
      timeOpen: new Moment()
    };
    dispatch(action);
    _names.value = '';
    _area.value = '';
    _job.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTaskFormSubmission}>
        <input
          type='text'
          id='names'
          placeholder='Name'
          ref={(input) => {_names = input;}}/>
        <input
          type='text'
          id='area'
          placeholder='Area for job'
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

export default connect()(NewTaskForm);
