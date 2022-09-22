import React, { useState } from 'react'

export const ThemeContext = React.createContext()

function UseContextEg() {

    const [darkTheme, setDarkTheme] = useState(true)

    function toggleTheme() {
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <FunctionContextComponent/>
        <ClassContextComponent/>
      </ThemeContext.Provider>
    </>
  )
}

export default UseContextEg
