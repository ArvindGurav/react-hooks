import React, { useLayoutEffect, useRef, useState } from 'react'

function UseLayoutEg() {

    const [show, setShow] = useState(false)
    const popup = useRef()
    const button = useRef()

    ///useEffect and useLayout function in similer way. Only difference is useLayout executed just before layout(dom) is render on screen. 
    //If we use useEffect then styling will be applied after millisec to popup message.
    useLayoutEffect( ()=> {
        if(popup.current == null || button.current == null) return
        const {bottom} = button.current.getBoundingClientRect()
        popup.current.style.top = `${bottom + 25}px`
    }, [show])
    

  return (
    <>
      <button ref={button} onClick={() => setShow(prev => !prev)}>Click Here</button>
      { show && (
        <div style={{position: "absolute"}} ref={popup}> This is a popup</div>
      )}
    </>
  )
}

export default UseLayoutEg
