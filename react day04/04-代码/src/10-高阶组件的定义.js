import React from 'react'
import ReactDOM from 'react-dom'
// 导入图片
import cat from './cat.png'

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

// 定义一个高阶组件
// 1. 高阶组件实质上是一个函数
// 2. 高阶组件的命名  withXXX  表示给组件添加XXX的能力
// 3. 高阶组件接收一个普通的组件, 需要增强能力的组件

// 给普通组件创建一个父组件，父组件提供了鼠标的状态和逻辑，并且在渲染普通的组件的时候，把状态传递 给了子组件
function withMouse(Base) {
  // 提供获取鼠标的能力 包括鼠标的逻辑
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

    render() {
      // 给Base组件传递鼠标的x 和 y
      return <Base {...this.state} />
    }
  }
  return Mouse
}

// render props  复用组件的状态和处理状态的逻辑，不复用UI
// 定义组件  组件必须接受一个 props,,这个props必须是个函数 props的名字 render children
const CatWithMouse = withMouse(Cat)
const PositionWithMouse = withMouse(Position)
ReactDOM.render(
  <div>
    <CatWithMouse />
    <PositionWithMouse />
  </div>,
  document.getElementById('root')
)
