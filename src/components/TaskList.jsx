import React from 'react';
import Task from './Task';
export default TaskList;
import scenic from '../assets/images/scenic.jpg';

var masterTaskList = [
  {
    names: 'Thato and Haley',
    location: '3A',
    job: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    job: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    job: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

function TaskList(){
  return (
    <div>
      <hr/>
      {masterTaskList.map((task, index) =>
        <Task names={task.names}
          location={task.location}
          job={task.job}
          key={index}/>
      )}
    </div>
  );
}
