import React from 'react';
import Header from './Header';
import TaskList from './TaskList';
import NewTaskControl from './NewTaskControl';
import { Switch, Route, withRouter } from 'react-router-dom';
import Moment from 'moment';
import EditTask from './EditTask';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTask: null
    };
    this.handleChangingSelectedTask = this.handleChangingSelectedTask.bind(this);
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateTaskElapsedWaitTime(),
    60000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateTaskElapsedWaitTime() {
    // var newMasterTaskList = Object.assign({}, this.state.masterTaskList);
    // Object.keys(newMasterTaskList).forEach(taskId => {
    //   newMasterTaskList[taskId].formattedWaitTime = (newMasterTaskList[taskId].timeOpen).fromNow(true);
    // });
    // this.setState({masterTaskList: newMasterTaskList});
  }

  handleChangingSelectedTask(taskId){
    this.setState({selectedTask: taskId});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TaskList taskList={this.props.masterTaskList} />} />
          <Route path='/newtask' render={()=><NewTaskControl />} />
          <Route path='/edittask' render={(props)=><EditTask taskList={this.props.masterTaskList} currentRouterPath={props.location.pathname}
            onTaskSelection={this.handleChangingSelectedTask}
            selectedTask={this.state.selectedTask}/>} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  masterTaskList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterTaskList: state
  };
};

export default withRouter(connect(mapStateToProps)(App));
