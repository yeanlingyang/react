import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

/* 
  分页的组件
    当前页      1
    每页的条数  10
    总的条数    0
  <Paginator total={100}></Paginator>

  轮播图组件
    是否自动播放   false
    间隔的时间
    是否会循环的播放
*/

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>props的默认值</h1>
        <p>默认的条数: {this.props.pageSize}</p>
      </div>
    )
  }
}

// props的校验
App.propTypes = {
  pageSize: PropTypes.number
}
// props的默认值
App.defaultProps = {
  pageSize: 10
}

ReactDOM.render(<App pageSize="20" />, document.getElementById('root'))
