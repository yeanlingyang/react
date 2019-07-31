import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    list: ['乔碧罗殿下', '罗玉凤', '芙蓉', '翠花'],
    random: 0
  }
  render() {
    return (
      <div>
        <h1>根组件</h1>
        <button onClick={this.handleClick}>随机分配</button>
        <PengPeng girlFriend={this.state.list[this.state.random]} />
        <JunJun />
      </div>
    )
  }
  handleClick = () => {
    this.setState({
      random: parseInt(Math.random() * this.state.list.length)
    })
  }
}
class PengPeng extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // 判断接收的props是否发生了改变
    // 组件本次接收到最新的props和state
    console.log(this.props)
    console.log(nextProps)
    if (this.props.girlFriend === nextProps.girlFriend) {
      // 接收到的props没有发生改变，就不需要更新
      return false
    }
    return true
  }
  render() {
    console.log('鹏鹏的render.....')
    return (
      <div>
        <h3>我是鹏鹏</h3>
        <p>听说发女朋友了，我女朋友是------{this.props.girlFriend}</p>
      </div>
    )
  }
}

class JunJun extends React.Component {
  shouldComponentUpdate() {
    // 如果返回true，表示需要更新， 如果返回false，组件就不更新
    console.log('shouldComponentUpdate执行了')
    return false
  }
  render() {
    console.log('俊俊的render....')
    return (
      <div>
        <h3>我是俊俊</h3>
        <p>我是吃瓜群众，跟我没关系</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
