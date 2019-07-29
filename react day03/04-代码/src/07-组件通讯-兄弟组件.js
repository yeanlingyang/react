import React from 'react'
import ReactDOM from 'react-dom'

class Parent extends React.Component {
  // 1. 父组件提供公共的状态
  // 4. 父组件提供一个修改msg的函数
  state = {
    msg: ''
  }

  changeMsg = msg => {
    this.setState({
      msg
    })
  }
  render() {
    return (
      <div style={{ backgroundColor: 'pink' }}>
        <h1>这是父组件</h1>
        {/* 5. 父组件把函数传递给了jack */}
        <Jack changeMsg={this.changeMsg} />
        {/* 2. 父组件把消息传递给Rose */}
        <Rose msg={this.state.msg} />
      </div>
    )
  }
}

class Jack extends React.Component {
  state = {
    msg: 'you jump i look'
  }
  render() {
    return (
      <div style={{ backgroundColor: 'green' }}>
        <h3>Jack组件</h3>
        <button onClick={this.handleClick}>jack说</button>
      </div>
    )
  }
  handleClick = () => {
    // 6. Jack给父组件传递值
    this.props.changeMsg(this.state.msg)
  }
}

class Rose extends React.Component {
  render() {
    // 3. rose组件接收msg消息
    return (
      <div style={{ backgroundColor: 'skyblue' }}>
        <h3>Rose组件</h3>
        <p>jack的话：{this.props.msg}</p>
      </div>
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'))
