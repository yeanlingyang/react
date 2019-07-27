import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  state = {
    // list: []
    list: [
      { id: 1, user: '俊俊', content: '发现自己好美呀' },
      { id: 2, user: '鹏鹏', content: '发现自己又胖啊' },
      { id: 3, user: '聪聪', content: '你胖你都对' }
    ],
    user: '',
    content: ''
  }

  renderList() {
    const { list } = this.state
    // 如果有长度，渲染列表，否则渲染提示消息
    if (list.length) {
      return (
        <ul>
          {this.state.list.map(item => (
            <li key={item.id}>
              <h3>评论人：{item.user}</h3>
              <p>评论内容：{item.content}</p>
            </li>
          ))}
        </ul>
      )
    } else {
      return <div className="no-comment">暂无评论，快去评论吧~</div>
    }
  }

  render() {
    return (
      <div className="app">
        <div>
          <input
            className="user"
            type="text"
            placeholder="请输入评论人"
            value={this.state.user}
            name="user"
            onChange={this.handleChange}
          />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            value={this.state.content}
            name="content"
            onChange={this.handleChange}
          />
          <br />
          <button onClick={this.add}>发表评论</button>
          <button onClick={this.clear}>清空评论</button>
        </div>

        {this.renderList()}
      </div>
    )
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  add = () => {
    const data = {
      id: +new Date(),
      user: this.state.user,
      content: this.state.content
    }

    // 把data加上list的最前面
    // this.state.list.unshift(data)
    this.setState({
      list: [data, ...this.state.list],
      user: '',
      content: ''
    })
  }
  clear = () => {
    this.setState({
      list: []
    })
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
