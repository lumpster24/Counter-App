import React, { Component } from "react";
import Counter from "./Counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onIncrement, onDelete } = this.props

    return (
      <div>
        <button onClick={onReset}>Reset</button>
        {counters.map(counter => (
          <Counter
            key={counter.id}
            counter={counter}
            onIncrement={onIncrement}
            onDelete={onDelete}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
