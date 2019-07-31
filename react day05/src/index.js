import React from 'react'
import ReactDOM from 'react-dom'

/* 
  需求： 数据改变了，页面的dom要更新
  1. jsx 提供了组件最终要渲染的内容   模板
  2. state 提供了数据
  3. 通过模版和数据 =======> 最终要渲染的DOM结构
  4. state发生了改变
  5. 新的state + 模板 ======> 新的DOM结构
  6. 新的DOM结构替换旧的DOM

    优点：非常的简单
    缺点：完整的把整个DOM结构都重新更新，设计到大量DOM元素的重新绘制和重排，性能比较低

  
  需求2： 数据变了，只更新需要更新的部分
  1. jsx 提供了组件最终要渲染的内容   模板
  2. state 提供了数据
  3. 通过模版和数据 =======> 最终要渲染的DOM结构
  4. state发生了改变
  5. 新的state + 模板 ======> 新的DOM结构
  6. 对比   对比新的DOM和旧的DOM有哪些不同（内存中） 找到不同的地方
  7. 更新需要更新的部分。
    优点：没有更新所有的DOM结构
    缺点：多了一个对比（对比也挺消耗性能）   -----真实的DOM结构是非常复杂。

*/

class App extends React.Component {
  state = {
    count: 0
  }
  render() {
    const element = (
      <div>
        <h1 key={1}>虚拟DOM的更新</h1>
        <p key={2}>次数：{this.state.count}</p>
        <button onClick={this.handleClick}>+1</button>
      </div>
    )
    console.log(element)
    return element
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
}
/* 
  [first, second]
  <ul>
    <li key='first'>first</li>
    <li key='second'>second</li>
  </ul>

  {
    type: ul ,null, children: [
      {type: 'li', null, children: 'first', key: 'first'}
      {type: 'li', null, children: 'second', key: 'second'}
    ]
  }


  [third ,first, second]
  <ul>
    <li key='third'>third</li>
    <li key='first'>first</li>
    <li key='second'>second</li>
  </ul>
  {
    type: ul ,null, children: [
      {type: 'li', null, children: 'third' , key: 'third'}
      {type: 'li', null, children: 'first' key: 'first'}
      {type: 'li', null, children: 'second', key: 'second'}
    ]
  }

 */
ReactDOM.render(<App />, document.getElementById('root'))

// const root = document.querySelector('#root')
// var str = ''
// var total = 0
// for (var k in root) {
//   str += k + ' '
//   total++
// }
// console.log(str)
// console.log(total)
