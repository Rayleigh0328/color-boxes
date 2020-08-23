import React, { Component } from 'react';

import "./color-box.styles.css";

export default class ColorBox extends Component {
  constructor(props){
    super(props)
  }

  handleClick = (e) => {
    this.props.onClick(this.props.index);
  }

  render(){
    const {red, green, blue} = this.props;
    return (
      <div 
        className="ColorBox" 
        style={{backgroundColor:`rgb(${red},${green},${blue})`}} 
        onClick={this.handleClick}
      >
        <p>rgb:({red},{green},{blue})</p>
      </div>
    )
  }
}