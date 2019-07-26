// 在jsx中的列表渲染
import React from 'react'
import ReactDOM from 'react-dom'

const friends = ['芳芳妹', '蒋鹏鹏', '郑俊俊', '胡聪聪']

// 根据friends数组得到一个新的数组  [<li>芳芳妹</li>, <li>蒋鹏鹏</li>, <li>郑俊俊</li>]
// function render() {
//   const temp = []
//   for (var i = 0; i < friends.length; i++) {
//     temp.push(<li>{friends[i]}</li>)
//   }
//   return temp
// }

// function render() {
//   return friends.map(item => <li>{item}</li>)
// }

const element = (
  <div>
    <h1>列表渲染</h1>
    <ul>
      {/* {render()} */}
      {/* { friends.map(item => <li>{item}</li>) } */}
      { friends.map(item => <li>{item}</li>) }
    </ul>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))