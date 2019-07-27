import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    // 好处：如果需要多次使用到handleClick，不要重复的bind
    // 缺点：传参麻烦
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      msg: 'hello react'
    }
  }

  // 方式2：使用bind来解决
  // onClick = {this.handleClick.bind(this)}

  // 习惯：把bind操作提升到construtor中
  // this.handleClick = this.handleClick.bind(this)
  render() {
    return (
      <div>
        <h1>注册事件</h1>
        <button onClick={this.handleClick}>点我!!</button>
      </div>
    )
  }

  handleClick() {
    console.log('哈哈')
    console.log(this)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
