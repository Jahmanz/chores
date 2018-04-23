import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import NewTaskControl from './NewTaskControl';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTaskList: []
    };
    this.handleAddingNewTaskToList = this.handleAddingNewTaskToList.bind(this);
  }

  handleAddingNewTaskToList(newTask){
    var newMasterTaskList = this.state.masterTaskList.slice();
    newMasterTaskList.push(newTask);
    this.setState({masterTaskList: newMasterTaskList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TaskList taskList={this.state.masterTaskList} />} />
          <Route path='/newtask' render={()=><NewTaskControl onNewTaskCreation={this.handleAddingNewTaskToList} />} />
        </Switch>
      </div>
    );
  }

}

export default App;
