import React, {Component} from 'react';
import './Die.css';

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.numberStrings = ['one', 'two', 'three', 'four', 'five', 'six'];
  }

  handleClick() {
    this.props.handleClick(this.props.idx);
  }

  render() {
    // putting numberStrings here would recreate the array every time! Performance hit
    let classes = `Die fas fa-dice-${
      this.numberStrings[this.props.val - 1]
    } fa-5x `;

    if (this.props.locked) {
      classes += 'Die-locked';
    }

    return (
      <i
        className={classes}
        onClick={this.handleClick} // an inline arrow function would create a new function each time the component is rendered!!
        disabled={this.props.disabled}
      ></i>
    );
  }
}

export default Die;
