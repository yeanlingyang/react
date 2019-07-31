import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    count: 0,
    msg: '嘻嘻'
  }
  render() {
    return (
      <div>
        <h1>setState是异步的</h1>
        <p>次数：{this.state.count}</p>
        <button onClick={this.handleClick}>修改</button>
      </div>
    )
  }

  handleClick = () => {
    // 让count+1
    // 这个操作是异步的
    // 修改state的值   更新UI
    this.setState({
      count: this.state.count + 1
    })
    this.setState({
      msg: '哈哈'
    })
    this.setState({
      count: this.state.count + 1
    })
    this.setState({
      count: this.state.count + 2
    })

    console.log(this.state.count)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
