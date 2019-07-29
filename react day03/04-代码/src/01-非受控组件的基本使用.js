import React from 'react'
import ReactDOM from 'react-dom'

// 非受控组件: 直接操作原生DOM,借助于ref
// 1. 调用React.createRef() 可以创建一个引用
// 2. 给需要操作的DOM对象或者组件 使用这个引用 ref={this.inputRef}
// 3. this.inputRef.current就可以获取到这个DOM对象
class App extends React.Component {
  constructor() {
    super()
    this.inputRef = React.createRef()
  }

  render() {
    return (
      <div>
        <h1>非受控组件</h1>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
  handleClick = () => {
    console.log(this.inputRef.current.value)
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
