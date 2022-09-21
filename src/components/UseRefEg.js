import React, { useEffect, useRef, useState } from 'react'

function UseRefEg() {

    const [name, setName] = useState('')
    const inputRef = useRef()
    const prevName = useRef('')

    function focusInputRef() {
        //get reference to input dom
        inputRef.current.focus()
    }

    useEffect( () => {
        ///useRef to avoid additional rerender
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
