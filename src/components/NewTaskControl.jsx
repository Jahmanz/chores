import React from 'react';
import ConfirmationQuestions from './ConfirmationQuestions';
import NewTaskForm from './NewTaskForm';

class NewTaskControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  // handleClick(){
  //   this.setState({formVisibleOnPage: true});
  //   console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  // }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewTaskForm />;
    } else {
      currentlyVisibleContent = <ConfirmationQuestions />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewTaskControl;
