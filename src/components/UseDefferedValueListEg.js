import React, { useDeferredValue, useMemo } from 'react'

function UseDefferedValueListEg({input}) {
    const LIST_SIZE = 20000
    const deferrefInput = useDeferredValue(input)
    //useDeferredValue accepts a value and returns a new copy of the value that will defer to more urgent updates. 
    //If the current render is the result of an urgent update, like user input, 
    //React will return the previous value and then render the new value after the urgent render has completed.
    const list = useMemo( () => {
        console.log('input', input)
        console.log('deferrefInput', deferrefInput)
        const l = []
        for(let i=0; i< LIST_SIZE; i++) {
            l.push(<div key={i}>{deferrefInput}</div>)
        }
        return l
    }, [deferrefInput])


  return list
}

export default UseDefferedValueListEg
