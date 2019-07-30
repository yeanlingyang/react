import React from 'react'
import ReactDOM from 'react-dom'
// 导入图片
import cat from './cat.png'

// 猫
function Cat(props) {
  console.log(props)
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

function Position({ x, y }) {
  return (
    <div>
      鼠标当前位置：(x: {x}, y: {y})
    </div>
  )
}

function withCC(Base) {
  class CC extends React.Component {
    state = {
      cc: 100
    }
    render() {
      return <Base {...this.state} />
    }
  }
  const displayName = Base.displayName || Base.name || 'Component'
  CC.displayName = `${displayName}WithCC`
  return CC
}

function withMouse(Base) {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0
    }

    componentDidMount() {
      window.addEventListener('mousemove', this.handleMove)
    }

    handleMove = e => {
      this.setState({
        x: e.pageX,
        y: e.pageY
      })
    }
    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMove)
    }

    render() {
      return <Base {...this.state} {...this.props} />
    }
  }
  // 设置组件最终展示的名字
  // name属性指的是组件的名字
  // console.log(Base.name)
  // 没有管Base的display,直接获取Base
  const displayName = Base.displayName || Base.name || 'Component'
  Mouse.displayName = `${displayName}WithMouse`
  return Mouse
}

// withRouter
const CatWithMouse = withMouse(Cat)
const PositionWithMouse = withMouse(Position)

ReactDOM.render(
  <div>
    <CatWithMouse aa="bb" />
    <PositionWithMouse />
  </div>,
  document.getElementById('root')
)
