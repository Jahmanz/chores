import React from 'react';
import { Link } from 'react-router-dom';

function Header(){
  return (
    <div>
      <h1>Help Queue</h1>
        <Link to="/">Home</Link> | <Link to="/newtask">Create Task</Link>
        </div>
      );
    }

    export default Header;
