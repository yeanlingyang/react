import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div>
          <input
            className="user"
            type="text"
            placeholder="请输入评论人"
            name="userName"
          />
          <br />
          <textarea
            className="content"
            cols="30"
            rows="10"
            placeholder="请输入评论内容"
            name="userContent"
          />
          <br />
          <button>发表评论</button>
          <button>清空评论</button>
        </div>

        <ul>
          <li>
            <h3>评论人：11</h3>
            <p>评论内容：222</p>
          </li>
        </ul>

        <div className="no-comment">暂无评论，快去评论吧~</div>
      </div>
    )
  }
}

// 渲染组件
ReactDOM.render(<App />, document.getElementById('root'))
