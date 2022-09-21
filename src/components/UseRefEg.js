import React, { useRef, useState } from 'react'

function UseRefEg() {

    const [name, setName] = useState('')
    const inputRef = useRef()

  return (
    <>
        <input ref={inputRef} value={name} onChange={ (e) => setName(e.target.value)}></input>
        <div>My name is {name}</div>
        <button onClick={focusInputRef}>Focus</button>
    </>
  )
}

export default UseRefEg
