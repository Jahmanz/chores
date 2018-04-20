import React from 'react';
import Task from './Task';
export default TaskList;

var masterTaskList = [
  {
    names: 'Jahmanz',
    location: 'Living Room',
    job: 'vacuum'
  },
  {
    names: 'Laura',
    location: 'grocery store',
    job: 'Get Groceries'
  },
  {
    names: 'Florence',
    location: 'kitchen',
    job: 'cook dinner'
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
