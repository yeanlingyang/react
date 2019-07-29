import React from 'react'
import ReactDOM from 'react-dom'
// 提供很多的规则
import PropTypes from 'prop-types'

class App extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h1>props校验</h1>
        <p>{this.props.money + 10}</p>
      </div>
    )
  }
}

// 需要给App组件添加prop的校验
App.propTypes = {
  // 提供校验规则
  // 传入的money必须是数字类型
  // money必须是number类型，必须传入
  money: PropTypes.number.isRequired
}

ReactDOM.render(<App />, document.getElementById('root'))
