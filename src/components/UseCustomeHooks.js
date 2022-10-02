import React from 'react'
import UseCustomHooksLocalStorage from './UseCustomHooksLocalStorage'

function UseCustomeHooks() {

    const[ name, setName] = UseCustomHooksLocalStorage('name', '')

  return (
    <div>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
    </div>
  )
}

export default UseCustomeHooks
