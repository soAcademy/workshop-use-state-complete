import React from "react"

class FirstCounterComponent extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }

  handleClick = (e) => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <h1>FirstCounter Count: {this.state.count}</h1>
        <button onClick={this.handleClick}>Plus 1</button>
      </div>
    )
  }
}

export default FirstCounterComponent
