import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    user: '俊俊',
    desc: '真俊',
    boyFriend: '2',
    isMarry: false
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
        <br />
        <textarea
          value={this.state.desc}
          onChange={this.handleDesc}
          cols="30"
          rows="10"
        />
        <br />
        <select value={this.state.boyFriend} onChange={this.handleFriend}>
          <option value="1">彭于晏</option>
          <option value="2">蔡徐坤</option>
          <option value="3">谢广坤</option>
          <option value="4">尼古拉斯赵四</option>
        </select>
        <br />
        是否结婚：
        <input
          type="checkbox"
          checked={this.state.isMarry}
          onChange={this.handleMarry}
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

  handleDesc = e => {
    this.setState({
      desc: e.target.value
    })
  }

  handleFriend = e => {
    this.setState({
      boyFriend: e.target.value
    })
  }

  handleMarry = e => {
    this.setState({
      isMarry: e.target.checked
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
