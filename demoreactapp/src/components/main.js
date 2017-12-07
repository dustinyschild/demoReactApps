import React from 'react';

export default class Main extends React.Component {
  constructor(){
    super();
    
    this.state = {
      buttonClick: true
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = function(){
    this.setState({buttonClick: !this.state.buttonClick});
  }
  
  render(){
    return(
      <div>
        Hello World! This is my new React App
        {
          //Here we can put javascript logic!
          this.state.buttonClick ? <div>We can see this</div> : <div>Or we can see this</div>
        }
        <button onClick={this.handleClick}>Press Me!</button>
      </div>
    )
  }
}