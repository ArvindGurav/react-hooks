import React, { useCallback, useState } from 'react'
import ListCallback from './ListCallback'

function UseCallbackEg() {

    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)

    //usecallback will create assign function to getItems and will not re-create the function on evry render.
    // In case of useMemo only return value is memorise and not the entire function.
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])

    const theme = {
        backgroundColor : dark ? '#333' : '#FFF',
        color : dark ? '#FFF' : '#333'
    }

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={ e => setNumber(parseInt(e.target.value))}></input>
      <button onClick={() => setDark( prev => !prev)} >Toggle Theme</button>
      <ListCallback getItems={getItems}></ListCallback>
    </div>
  )
}

export default UseCallbackEg
