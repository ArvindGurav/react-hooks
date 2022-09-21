import React, { useEffect, useState } from 'react'

function UseEffectEg() {

    const [resourceType, setResourceType] = useState('posts')
    const [items, setItems] = useState([])

    function setResourceTypeAndLoadingTrue(type) {
        setResourceType(type)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        .then(response => response.json())
        .then(json => {
            setItems(json)
        })
    }, [resourceType])

  return (
    <>
        <div>
        <button onClick={ () => setResourceTypeAndLoadingTrue('posts')}>Posts</button>
        <button onClick={ () => setResourceTypeAndLoadingTrue('users')}>Users</button>
        <button onClick={ () => setResourceTypeAndLoadingTrue('comments')}>Comments</button>
        </div>
        <h1>{resourceType}</h1>
        { items.map( item => {
            return <pre>{JSON.stringify(item)}</pre>
        })}
    </>
  )
}

export default UseEffectEg
