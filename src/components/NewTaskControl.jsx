import React from 'react';

class NewTaskControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
  }

  handleClick(){
    this.setState({formVisibleOnPage: true});
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  }

  render(){
    return (
      <div>
        <p>This is the NewTaskControl component!</p>
          <strong onClick={this.handleClick}>Click me to change my state!</strong>
          </div>
        );
      }
    }

    export default NewTaskControl;