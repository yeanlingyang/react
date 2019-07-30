import React from 'react'
import ReactDOM from 'react-dom'

class DouDou extends React.Component {
  componentDidMount() {
    this.timeId = setInterval(() => {
      console.log('请别打我')
    }, 1000)

    window.addEventListener('resize', this.handleResize)
  }

  handleResize = () => {
    console.log('改变了窗口大小')
  }
  render() {
    console.error('render执行')
    return (
      <div style={{ backgroundColor: 'pink' }}>
        <h3>我是豆豆</h3>
        <div>我被打了{this.props.count}次</div>
      </div>
    )
  }
  componentDidUpdate() {
    console.error('componentDidUpdate执行')
  }

  // 组件将要被卸载
  componentWillUnmount() {
    console.error('componentWillUnmount要执行了，赶紧处理后事把')
    clearInterval(this.timeId)
    window.removeEventListener('resize', this.handleResize)
  }
}

class App extends React.Component {
  constructor(props) {
    super(props)
    // 1. 组件创建时的第一个钩子函数
    // 2. 会在constructor中做一些初始化的操作
    //  初始化state
    //  会给事件处理程序绑定this
    console.warn('constructor执行了')
    this.state = {
      msg: '哈哈',
      count: 0
    }
  }
  render() {
    // 1. render必须提供的，render的作用：渲染组件最终需要显示的结构
    // 2. render函数会在创建时执行一次，会在数据发生更新的时候，也会执行
    console.warn('render钩子函数执行了')
    // this.setState({})
    return (
      <div>
        <h1>组件的生命周期</h1>
        {this.state.count >= 5 ? (
          <div>豆豆被打死了~</div>
        ) : (
          <DouDou count={this.state.count} />
        )}

        <button onClick={this.handleClick}>打豆豆</button>
      </div>
    )
  }
  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
    // 强制更新当前组件
    // this.forceUpdate()
  }
  componentDidMount() {
    // 组件已经挂载好， DOM已经渲染好了
    // 1. 操作DOM
    // 2. 发送ajax请求
    console.warn('componentDidMount执行了')
    console.log(document.querySelector('h1').innerHTML)
  }

  componentDidUpdate() {
    console.warn('componentDidUpdate钩子函数执行了')
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
