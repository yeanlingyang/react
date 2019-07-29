import React from 'react'
class CommentForm extends React.Component {
  state = {
    user: '',
    content: ''
  }
  render() {
    return (
      <div>
        <input
          className="user"
          type="text"
          placeholder="请输入评论人"
          value={this.state.user}
          onChange={this.handleChange}
          name="user"
        />
        <br />
        <textarea
          className="content"
          cols="30"
          rows="10"
          placeholder="请输入评论内容"
          value={this.state.content}
          onChange={this.handleChange}
          name="content"
        />
        <br />
        <button onClick={this.add}>发表评论</button>
        <button onClick={this.clear}>清空评论</button>
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
    // 不能直接添加的，list在comment父组件中
    this.props.add(this.state.user, this.state.content)
    // 清空内容
    this.setState({
      user: '',
      content: ''
    })
  }

  clear = () => {
    this.props.clear()
  }
}
export default CommentForm
