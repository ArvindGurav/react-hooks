import React, { useCallback, useState } from 'react'

function UseCallbackEg() {

    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    })

    const theme = {
        backgroundColor : dark ? '#333' : '#FFF',
        color : dark ? '#FFF' : '#333'
    }

  return (
    <div style={theme}>
      
    </div>
  )
}

export default UseCallbackEg
