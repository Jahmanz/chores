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
    // var newMasterTaskList = Object.assign({}, this.state.masterTaskList);
    // Object.keys(newMasterTaskList).forEach(taskId => {
    //   newMasterTaskList[taskId].formattedWaitTime = (newMasterTaskList[taskId].timeOpen).fromNow(true);
    // });
    // this.setState({masterTaskList: newMasterTaskList});
  }

  render(){
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><TaskList taskList={this.props.masterTaskList} />} />
          <Route path='/newtask' render={()=><NewTaskControl />} />
          <Route path='/edittask' render={(props)=><EditTask currentRouterPath={props.location.pathname} />} />
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
    masterTaskList: state.masterTaskList
  };
};

export default withRouter(connect(mapStateToProps)(App));
