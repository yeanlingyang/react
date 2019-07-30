import React from 'react'
import ReactDOM from 'react-dom'
// 导入图片
import cat from './cat.png'
class Mouse extends React.Component {
  state = {
    x: 0,
    y: 0
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
  }

  handleMove = e => {
    this.setState({
      x: e.pageX,
      y: e.pageY
    })
  }

  // 渲染的内容组件不写死，由外界传入，通过props就可以给组件传内容
  // 要求传入的render是一个函数， 内部就可以调用，并且把状态传递函数的参数
  render() {
    return this.props.children(this.state)
  }
}

// 通过一个prop，prop的名字一般叫做render
// 函数的优点： 1. 函数是可以调用  2. 函数调用的时候是可以传递参数

// 封装一个组件，组件中的状态和逻辑都希望能够复用，但是组件需要渲染的UI不确定的
// 组件接收一个props,,,接收的props名字render, 值需要是一个函数，，，，组件内部只需要调用render
// 具体渲染的内容由  render的prop传递进来的
ReactDOM.render(
  <div>
    <Mouse>
      {state => (
        <div>
          <img
            src={cat}
            style={{
              position: 'absolute',
              left: state.x - 64,
              top: state.y - 64
            }}
            alt=""
          />
        </div>
      )}
    </Mouse>
    <Mouse>
      {state => (
        <div>
          鼠标当前位置：(x: {state.x}, y: {state.y})
        </div>
      )}
    </Mouse>
  </div>,
  document.getElementById('root')
)
