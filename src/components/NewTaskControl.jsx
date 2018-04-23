import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTaskForm from './NewTaskForm';
import PropTypes from 'prop-types';

class NewTaskControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  handleConfirmation(){
    this.setState({formVisibleOnPage: true});
  }


  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTaskForm onNewTaskCreation={this.props.onNewTaskCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions onConfirmation={this.handleConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

NewTaskControl.propTypes = {
  onNewTaskCreation: PropTypes.func
};

export default NewTaskControl;
