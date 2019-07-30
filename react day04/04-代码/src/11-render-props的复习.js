import React from 'react'
import ReactDOM from 'react-dom'
// 导入图片
import cat from './cat.png'
import PropTypes from 'prop-types'

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

function Position({ x, y }) {
  return (
    <div>
      鼠标当前位置：(x: {x}, y: {y})
    </div>
  )
}

// 只提供了状态以及逻辑
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

  handleMove = e => {
    this.setState({
      x: e.pageX,
      y: e.pageY
    })
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMove)
  }

  // 套路：render-props
  // 1. 接收一个prop, 接收的prop来告诉我最终要渲染的内容
  // 2. 这个prop需要是一个函数，函数调用能够传递参数
  // 3. prop可以叫render  children
  render() {
    return this.props.children(this.state)
  }
}

// 需求： 让位置实时打印鼠标的位置信息
//        猫跟着鼠标变

ReactDOM.render(
  <div>
    <Mouse>{state => <Cat {...state} />}</Mouse>
    <Mouse>{state => <Position {...state} />}</Mouse>
  </div>,
  document.getElementById('root')
)
