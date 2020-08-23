import React, { Component } from 'react';
import ColorBox from '../color-box/color-box.component';
import { generateColorArray, generateRandomColor } from '../../helper/helper';

import "./color-box-container.styles.css";

export default class ColorBoxContainer extends Component {
  static defaultProps = {
    numBox : 3
  }

  constructor(props){
    super(props);
    this.state = {
      boxArray : generateColorArray(this.props.numBox)
    }
  }

  clickColorBox = (index) => {
    const newBoxArray = this.state.boxArray.map( (box,i) => (i===index?generateRandomColor():box) )
    this.setState({boxArray : newBoxArray})
  }

  regenerate = () => {
    this.setState({boxArray : generateColorArray(this.props.numBox)});
  }

  render(){
    return (
      <div className="ColorBoxContainer">
        <div className="ColorBoxList">
        {
          this.state.boxArray.map( (box,i) =>  
            <ColorBox 
              key={i}
              {...box} 
              index={i}
              onClick={this.clickColorBox}
            /> 
          )
        }
        </div>
        <button onClick={this.regenerate}>Click to regenerate</button>
      </div>
    )
  }
}