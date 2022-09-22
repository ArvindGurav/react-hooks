import React, { useEffect, useState } from 'react'

function ListCallback({getItems}) {

    const [items, setItems] = useState([])

    useEffect( ()=> {
        setItems(getItems)
    }, [getItems])

  return (
    <div>
      {items.map( item => <div key={item}>{item}</div>)}
    </div>
  )
}

export default ListCallback
