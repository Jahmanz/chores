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
      masterTaskList: {},
      selectedTask: null
    };
    this.handleAddingNewTaskToList = this.handleAddingNewTaskToList.bind(this);
    this.handleChangingSelectedTask = this.handleChangingSelectedTask.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTaskElapsedWaitTime(),
    10000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTaskElapsedWaitTime() {
    var newMasterTaskList = Object.assign({}, this.state.masterTaskList);
    Object.keys(newMasterTaskList).forEach(taskId => {
      newMasterTaskList[taskId].formattedWaitTime = (newMasterTaskList[taskId].timeOpen).fromNow(true);
    });
    this.setState({masterTaskList: newMasterTaskList});
  }

  handleAddingNewTaskToList(newTask){
    var newMasterTaskList = Object.assign({}, this.state.masterTaskList, {
      [newTask.id]: newTask
    });
    newMasterTaskList[newTask.id].formattedWaitTime = newMasterTaskList[newTask.id].timeOpen.fromNow(true);
    this.setState({masterTaskList: newMasterTaskList});
  }

  handleChangingSelectedTask(taskId){
    this.setState({selectedTask: taskId});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TaskList taskList={this.state.masterTaskList} />} />
          <Route path='/newtask' render={()=><NewTaskControl onNewTaskCreation={this.handleAddingNewTaskToList} />} />
          <Route path='/edittask' render={(props)=><EditTask taskList={this.state.masterTaskList} currentRouterPath={props.location.pathname}
            onTaskSelection={this.handleChangingSelectedTask}
            selectedTask={this.state.selectedTask}/>} />
        </Switch>
      </div>
    );
  }

}

export default App;
