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
          name="user"
          value={this.state.user}
          onChange={this.handleChange}
          placeholder="请输入用户名"
        />
        <br />
        <textarea
          name="desc"
          value={this.state.desc}
          onChange={this.handleChange}
          cols="30"
          rows="10"
        />
        <br />
        <select
          name="boyFriend"
          value={this.state.boyFriend}
          onChange={this.handleChange}
        >
          <option value="1">彭于晏</option>
          <option value="2">蔡徐坤</option>
          <option value="3">谢广坤</option>
          <option value="4">尼古拉斯赵四</option>
        </select>
        <br />
        是否结婚：
        <input
          type="checkbox"
          name="isMarry"
          checked={this.state.isMarry}
          onChange={this.handleChange}
        />
      </div>
    )
  }

  handleChange = e => {
    // 这里需要修改state的值
    // 需要知道修改谁
    // const name = e.target.name
    const { name, type, checked, value } = e.target
    // console.log(e.target.type  )
    // console.log(name)
    // 属性名表达式 ES6
    this.setState({
      [name]: type === 'checkbox' ? checked : value
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
