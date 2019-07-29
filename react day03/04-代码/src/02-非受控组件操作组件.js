import React from 'react'
import ReactDOM from 'react-dom'

class Demo extends React.Component {
  render() {
    return <div>这是Demo组件</div>
  }
  reset() {
    console.log('重置')
  }
}

class App extends React.Component {
  constructor() {
    super()
    this.inputRef = React.createRef()
    this.demoRef = React.createRef()
  }

  render() {
    return (
      <div>
        <h1>非受控组件</h1>
        <Demo ref={this.demoRef} />
        <input type="text" ref={this.inputRef} />
        <button onClick={this.handleClick}>按钮</button>
      </div>
    )
  }
  handleClick = () => {
    console.log(this.inputRef.current.value)
    this.demoRef.current.reset()
  }
}
ReactDOM.render(<App />, document.getElementById('root'))
