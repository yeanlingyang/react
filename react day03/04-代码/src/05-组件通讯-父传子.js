import React from 'react'
import ReactDOM from 'react-dom'

/* 
  1. 父组件提供数据
  2. 父组件给子组件添加自定义的属性
  3. 子组件通过this.props访问数据
*/
class Parent extends React.Component {
  // 1. 父组件提供数据
  state = {
    car: '玛莎拉蒂',
    money: 1000000
  }
  render() {
    return (
      <div style={{ backgroundColor: 'pink' }}>
        <h1>这是父组件</h1>
        {/* 2. 父组件给子组件添加属性 */} 
        <Son car={this.state.car} money={this.state.money} />
      </div>
    )
  }
}

class Son extends React.Component {
  render() {
    // 3. 子组件通过 this.props来访问组件
    console.log(this.props)
    return (
      <div style={{ backgroundColor: 'green' }}>
        <h3>子组件</h3>
        <p>
          {this.props.car} ---- {this.props.money}
        </p>
      </div>
    )
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'))
