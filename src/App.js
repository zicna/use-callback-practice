import React, { useState, useCallback } from 'react'
import List from './List'

function App() {
  const [dark, setDark] = useState(false)
  const [number, setNumber] = useState(1)

  const theme = {
    backgroundColor: dark ? '#333' : '#FFF',
    color: dark ? '#FFF' : '#333',
  }

  const toggleThemeHandler = () => {
    console.log('hello')
    setDark((prevDark) => !prevDark)
  }

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number])

  return (
    <div style={theme}>
      <h1>useCallback Hook Practice</h1>
      <input
        onChange={(event) => setNumber(parseInt(event.target.value || 0))}
        type="number"
        value={number || ''}
      />
      <button onClick={toggleThemeHandler}>Toggle Theme</button>
      <List getItems={getItems}></List>
    </div>
  )
}

export default App
