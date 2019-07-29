import React from 'react'
import PropTypes from 'prop-types'
class CommentList extends React.Component {
  render() {
    const { list } = this.props
    if (list.length) { 
      return (
        <ul>
          {list.map(item => (
            <li key={item.id}>
              <h3>评论人：{item.user}</h3>
              <p>评论内容：{item.content}</p>
              <button onClick={() => this.del(item.id)}>删除</button>
            </li>
          ))}
        </ul>
      )
    } else {
      return <div className="no-comment">暂无评论，快去评论吧~</div>
    }
  }

  del(id) {
    this.props.del(id)
  }
}

CommentList.propTypes = {
  list: PropTypes.array.isRequired,
  del: PropTypes.func.isRequired
}

export default CommentList
