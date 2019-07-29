import React from 'react'
import CommentForm from './CommentForm'
import CommentList from './CommentList'
class Comment extends React.Component {
  state = {
    list: [
      { id: 1, user: '俊俊', content: '真美啊' },
      { id: 2, user: '鹏鹏', content: 'sb' },
      { id: 3, user: '聪聪', content: '楼上说得对' }
    ]
  }
  render() {
    return (
      <div className="app">
        <CommentForm add={this.add} clear={this.clear} />
        <CommentList list={this.state.list} del={this.del} />
      </div>
    )
  }

  add = (user, content) => {
    const data = {
      id: +new Date(),
      user,
      content
    }
    this.setState({
      list: [data, ...this.state.list]
    })
  }

  clear = () => {
    this.setState({
      list: []
    })
  }

  del = id => {
    // 如何删除
    this.setState({
      list: this.state.list.filter(item => item.id !== id)
    })
  }
}
export default Comment
