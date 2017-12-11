import React from 'react';
import axios from 'axios';
import IpsumItem from './ipsumData';
import PropTypes from 'prop-types';

export default class Main extends React.Component {
  constructor(){
    super();
    
    this.state = {
      buttonClick: true,
      ipsums: []
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = function(){
    this.setState({buttonClick: !this.state.buttonClick});
    console.log('making request');
    axios.get('https://baconipsum.com/api/?type=meat-and-filler')
      .then(res => {
        console.log(res.data);
        this.setState({
          ipsums: [ ...this.state.ipsums, res.data ]
        });
        console.log(this.state.ipsums);
      })
      .catch(console.error);
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
        {
          this.state.ipsums.map(data => {
            return <IpsumItem data={ data } key={ Math.random() } />
          })
        }
      </div>
    )
  }
  
  const PropTypes = {
    this.props.firstName: PropTypes.string.isRequired
  }
}