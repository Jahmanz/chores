import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import { Switch, Route } from 'react-router-dom';
import NewTaskForm from './NewTaskForm';
import ImageComponent from './images';


function App(){
  return (
    <div>
      <Header/>
        <Switch>
          <Route exact path='/' component={TaskList} />
            <Route path='/newtask' component={NewTaskForm} />
            </Switch>
            <ImageComponent/>
            </div>
          );
        }

        export default App;
