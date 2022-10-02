import React, { useState } from 'react'
import UseDefferedValueListEg from './UseDefferedValueListEg'


function UseDefferedValueEg() {
    const [value, setValue] = useState("")

  return (
    <>
      <input type="text" value={value} onChange={(e)=> setValue(e.target.value)}></input>
      <UseDefferedValueListEg input={value}></UseDefferedValueListEg>
    </>
  )
}

export default UseDefferedValueEg
