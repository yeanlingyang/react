import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    msg: 'hello react',
    count: 0
  }
  render() {
    return (
      <div>
        <h1>注册事件</h1>
        <button onClick={this.handleClick}>+1</button>
        <p>点击次数：{this.state.count}</p>
      </div>
    )
  }

  handleClick = () => {
    // this.state.count++
    // 对象中提供要修改的值
    this.setState({
      count: this.state.count + 1,
      msg: '嘻嘻'
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
