import React from 'react'
import ReactDOM from 'react-dom'
// 导入图片
import cat from './cat.png'
import PropTypes from 'prop-types'

// 把鼠标的状态和修改鼠标位置的逻辑封装到了一个组件中
// Mouse
class Mouse extends React.Component {
  static propTypes = {
    children: PropTypes.func.isRequired
  }

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

// 猫
function Cat(props) {
  return (
    <div>
      <img
        src={cat}
        style={{
          position: 'absolute',
          left: props.x - 64,
          top: props.y - 64
        }}
        alt=""
      />
    </div>
  )
}

function Position(props) {
  return (
    <div>
      鼠标当前位置：(x: {props.x}, y: {props.y})
    </div>
  )
}

// render props  复用组件的状态和处理状态的逻辑，不复用UI
// 定义组件  组件必须接受一个 props,,这个props必须是个函数 props的名字 render children
ReactDOM.render(
  <div>
    <Mouse>{state => <Cat {...state} />}</Mouse>
    <Mouse>{state => <Position {...state} />}</Mouse>
  </div>,
  document.getElementById('root')
)
