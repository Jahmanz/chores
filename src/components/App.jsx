import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import NewTaskControl from './NewTaskControl';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TaskList} />
        <Route path='/newtask' component={NewTaskControl} />
      </Switch>
    </div>
  );
}

export default App;
