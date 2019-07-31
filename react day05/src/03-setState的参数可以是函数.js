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
    // prevState: 上一次setState的结果

    // 参数：接收一个函数，这个函数需要返回一个对象，返回的这个对象就代表需要修改的内容
    // this.setState(function(prevState){})
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      }
    })

    // () => ({})
    // () => { return {} }
    this.setState(prevState => ({
      count: prevState.count + 2
    }))

    // 调用setState修改完状态之后，需要操作更新后的数据
    console.log(this.state.count)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
