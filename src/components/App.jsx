import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import NewTaskControl from './NewTaskControl';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import EditTask from './EditTask';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterTaskList: [],
      selectedTicket: null
    };
    this.handleAddingNewTaskToList = this.handleAddingNewTaskToList.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTaskElapsedWaitTime(),
    1000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTaskElapsedWaitTime() {
    let newMasterTaskList = this.state.masterTaskList.slice();
    newMasterTaskList.forEach((task) =>
      task.formattedWaitTime = (task.timeOpen).fromNow(true)
    );
    this.setState({masterTaskList: newMasterTaskList});
  }

  handleAddingNewTaskToList(newTask){
    var newMasterTaskList = this.state.masterTaskList.slice();
    newTask.formattedWaitTime = (newTask.timeOpen).fromNow(true);
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
          <Route path='/edittask' render={(props)=><EditTask taskList={this.state.masterTaskList} currentRouterPath={props.area.pathname} />} />
        </Switch>
      </div>
    );
  }
}

export default App;
