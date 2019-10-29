import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { counter, onIncrement, onDelete } = this.props

    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          className="btn btn-secondary btn-sm"
          onClick={() => onIncrement(counter)}
        >
          Increment
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => onDelete(counter.id)}>Delete</button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount = () => {
    const { count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  };
}

export default Counter;
