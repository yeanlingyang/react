import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.PureComponent {
  state = {
    list: ['乔碧罗殿下', '罗玉凤', '芙蓉', '翠花'],
    random: 0,
    car: {
      brand: '玛莎拉蒂',
      price: 1000000
    }
  }
  render() {
    console.log('render.....')
    console.log(this.state.random)
    return (
      <div>
        <h1>根组件</h1>
        <button onClick={this.handleClick}>随机分配</button>
        <p>{this.state.list}</p>
        <p>{this.state.car.brand}</p>
      </div>
    )
  }
  handleClick = () => {
    console.log('点击了')
    // this.setState({
    //   random: parseInt(Math.random() * this.state.list.length)
    // })
    // this.setState({
    //   list: [...this.state.list, '张三']
    // })
    // const car = { ...this.state.car }
    // car.brand = '劳斯莱斯'
    this.setState({
      car: {
        ...this.state.car,
        brand: '劳斯莱斯'
      }
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
