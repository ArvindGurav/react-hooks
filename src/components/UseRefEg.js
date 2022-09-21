import React, { useEffect, useRef, useState } from 'react'

function UseRefEg() {

    const [name, setName] = useState('')
    const inputRef = useRef()
    const prevName = useRef('')

    function focusInputRef() {
        inputRef.current.focus()
    }

    useEffect( () => {
        ///if we use state instead of ref than it will go in infinte loop
        prevName.current = name
    }, [name])

  return (
    <>
        <input ref={inputRef} value={name} onChange={ (e) => setName(e.target.value)}></input>
        <div>My name is {name} and it used to be {prevName.current}</div>
        <button onClick={focusInputRef}>Focus</button>
    </>
  )
}

export default UseRefEg
