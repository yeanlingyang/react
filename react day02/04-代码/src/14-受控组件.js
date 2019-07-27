import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    user: 'react'
  }
  render() {
    return (
      <div>
        <h1>受控组件</h1>
        <input
          type="text"
          value={this.state.user}
          onChange={this.handleChange}
          placeholder="请输入用户名"
        />
      </div>
    )
  }

  handleChange = e => {
    // 这里需要修改state的值
    this.setState({
      user: e.target.value
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
