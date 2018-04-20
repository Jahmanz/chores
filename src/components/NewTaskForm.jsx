import React from 'react';

function NewTaskForm(){
  return (
    <div>
      <form>
        <input
          type='text'
          id='names'
          placeholder='Pair Names'/>
          <input
            type='text'
            id='location'
            placeholder='Location'/>
            <textarea
              id='job'
              placeholder='Describe your job.'/>
              <button type='submit'>Help!</button>
              </form>
            </div>
          );
        }

        export default NewTaskForm;
