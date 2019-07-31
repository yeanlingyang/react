import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  state = {
    count: 0,
    msg: '嘻嘻'
  }
  render() {
    return (
      <div>
        <h1>根组件</h1>
        <p>次数：{this.state.count}</p>
        <button onClick={this.handleClick}>修改</button>

        <Parent1 />
        <Parent2 />
      </div>
    )
  }

  handleClick = () => {
    // prevState: 上一次setState的结果

    // 参数：接收一个函数，这个函数需要返回一个对象，返回的这个对象就代表需要修改的内容
    // this.setState(function(prevState){})
    this.setState(
      prevState => {
        return {
          count: prevState.count + 1
        }
      },
      () => {
        console.log('这个函数会在组件更新完成后去执行')
        // 调用setState修改完状态之后，需要操作更新后的数据
        console.log(this.state.count)
        // 可以操作更新后的DOM
      }
    )
  }
}

class Parent1 extends React.Component {
  render() {
    console.log('render------parent1')
    return (
      <div>
        <h3>这是Parent1组件</h3>
        <Child1 />
        <Child2 />
        <button onClick={() => this.setState({})}>修改Parent1</button>
      </div>
    )
  }
}

class Parent2 extends React.Component {
  render() {
    console.log('render------parent2')
    return (
      <div>
        <h3>这是Parent2组件</h3>
        <Child3 />
        <Child4 />
      </div>
    )
  }
}

function Child1() {
  console.log('render------child1')
  return <div>这是Child1组件</div>
}
function Child2() {
  console.log('render------child2')
  return <div>这是Child2组件</div>
}
function Child3() {
  console.log('render------child3')
  return <div>这是Child3组件</div>
}
function Child4() {
  console.log('render------child4')
  return <div>这是Child4组件</div>
}

ReactDOM.render(<App />, document.getElementById('root'))
