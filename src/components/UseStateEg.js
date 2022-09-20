import React, {useState} from 'react'

function UseStateEg() {

  //run evry time function renders
  const [ count, setCount] = useState(4)

  //run only ones
  const [ count1, setCount1] = useState(() => {
    return 4
  })

  //useState with object
  const [ state, setState] = useState({ count2:5, theme:'blue'})
  const count2 = state.count2
  const theme = state.theme

  function incrementObjectCount() {
    setState( prevState => {
      return { ...prevState, count2: prevState.count2 + 1}
    })
  }

  function decrementObjectCount() {
    setState( prevState => {
      return { ...prevState, count2: prevState.count2 - 1}
    })
  }

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
    </div>
  )
}

export default UseStateEg
