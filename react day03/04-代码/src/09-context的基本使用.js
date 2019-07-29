import React from 'react'
import ReactDOM from 'react-dom'

// 1. 得到两个组件 Provider  Comsumer组件
const { Provider, Consumer } = React.createContext()
class Parent extends React.Component {
  state = {
    color: 'red'
  }
  render() {
    return (
      // 2. 使用Provider作为父组件提供数据
      <Provider value={this.state.color}>
        <div style={{ backgroundColor: 'pink' }}>
          <h1>这是父组件</h1>
          <Son />
        </div>
      </Provider>
    )
  }
}
class Son extends React.Component {
  render() {
    return (
      <Provider value="blue">
        <div style={{ backgroundColor: 'skyblue' }}>
          <h2>这是子组件</h2>
          <Sun />
        </div>
      </Provider>
    )
  }
}
class Sun extends React.Component {
  render() {
    return (
      <Consumer>
        {value => (
          <div style={{ backgroundColor: 'green' }}>
            <h3>这是孙组件----{value}</h3>
            <ChongSun />
          </div>
        )}
      </Consumer>
    )
  }
}

class ChongSun extends React.Component {
  render() {
    return (
      // 3. consumer用于消费数据，内容必须是一个函数
      <Consumer>
        {value => (
          <div style={{ backgroundColor: 'yellow' }}>
            <h3 style={{ color: value }}>这是重孙组件---{value}</h3>
          </div>
        )}
      </Consumer>
    )
  }
}

// 渲染组件
ReactDOM.render(<Parent />, document.getElementById('root'))
