import React, { Component } from 'react';

export default class ColorBox extends Component {
  constructor(props){
    super(props)
  }

  handleClick = (e) => {
    this.props.onClick(this.props.index);
  }

  render(){
    return (
      <div 
        className="ColorBox" 
        style={{backgroundColor:`rgb(${this.props.red},${this.props.green},${this.props.blue})`}} 
        onClick={this.handleClick}
      >
        dummyText
      </div>
    )
  }
}