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
