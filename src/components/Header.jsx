import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Task List</h1>
      <Link to="/">Home</Link> | <Link to="/newtask">Create Task</Link> |
      <h2>{new Date().toLocaleTimeString(setInterval(1000))}</h2>

    </div>
  );
}

export default Header;
