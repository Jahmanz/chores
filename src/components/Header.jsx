import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>TaskList</h1>
      <Link to="/">Home</Link> | <Link to="/newtask">Create Task</Link>
    </div>
  );
}

export default Header;
