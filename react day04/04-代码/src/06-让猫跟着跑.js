import React from 'react'
import ReactDOM from 'react-dom'
// 导入图片
import cat from './cat.png'
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
        <img
          src={cat}
          style={{
            position: 'absolute',
            left: this.state.x - 64,
            top: this.state.y - 64
          }}
          alt=""
        />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
