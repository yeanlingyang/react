// 在jsx中的列表渲染
import React from 'react'
import ReactDOM from 'react-dom'
// 主键 id
const friends = [
  { id: 1, name: '月月鸟', desc: '月半' },
  { id: 2, name: '郑俊俊', desc: '美' },
  { id: 3, name: '胡聪聪', desc: '帅' }
]

const element = (
  <div>
    <table>
      <tbody>
        {friends.map(item => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.desc}</td>
            <td>
              <button>删除</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
