import React, { Component } from "react";

import "./App.css";
import NavBar from './components/NavBar'
import Counters from "./components/Counters";


class App extends Component {
  state = {
    counters: [
      { id: 1, count: 0 },
      { id: 2, count: 0 },
      { id: 3, count: 0 }
    ]
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.count = 0
      return c
    })

    this.setState({
      counters
    })
  }

  handleIncrement = counter => {
    const counters = this.state.counters.slice()
    const index = counters.indexOf(counter)
    counters[index].count++

    this.setState({
      counters
    })
  }

  handleDelete = (id) => {
    const counters = this.state.counters.slice()

    this.setState({
      counters: counters.filter(c => c.id !== id)
    })
  }

  getTotalCount = () => {
    return this.state.counters.reduce((count, counter) => count + counter.count, 0)
  }

  render() {
    return (
      <>
        <NavBar numCounters={this.getTotalCount()} />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </>
    );
  }
}

export default App;
