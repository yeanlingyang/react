import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
  }

  handleMove = e => {
    this.setState({
      x: e.pageX,
      y: e.pageY
    })
  }

  render() {
    return (
      <div>
        鼠标当前位置：(x: {this.state.x}, y: {this.state.y})
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
