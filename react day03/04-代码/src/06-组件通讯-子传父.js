import React from 'react'
import ReactDOM from 'react-dom'

/* 
  1. 父组件提供一个函数， 这个函数都会有参数，参数用于接收数据
  2. 父组件给子组件传递这个函数
  3. 子组件通过this.props可以获取到这个函数
  4. 子组件可以 调用这个函数，可以传递参数
*/
class Parent extends React.Component {
  // 1. 父组件提供数据
  state = {
    car: '',
    money: ''
  }
  render() {
    return (
      <div style={{ backgroundColor: 'pink' }}>
        <h1>这是父组件</h1>
        <p>
          {this.state.car}-----{this.state.money}
        </p>
        {/* 2.父组件给子组件提供函数 */}
        <Son getMsg={this.getMsg} />
      </div>
    )
  }
  // 1. 父组件提供函数
  getMsg = (money, car) => {
    console.log(money, car)
    console.log('this', this)
    this.setState({
      money,
      car
    })
  }
}

class Son extends React.Component {
  state = {
    money: 1,
    car: '小黄车'
  }
  render() {
    console.log(this.props)
    return (
      <div style={{ backgroundColor: 'green' }}>
        <h3>子组件</h3>
        <p>
          {this.state.car} ---- {this.state.money}
        </p>
        <button onClick={this.handleClick}>给父组件传值</button>
      </div>
    )
  }
  handleClick = () => {
    //3. 子组件接收到函数
    //4. 子组件给父组件传值

    this.props.getMsg(this.state.money, this.state.car)
  }
}

ReactDOM.render(<Parent />, document.getElementById('root'))
