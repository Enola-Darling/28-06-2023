import { useState } from 'react'
import './App.css'
import Form from './Components'

function App() {
  const todos = [
    { id: 1, text: "Wash dishes", done: false },
    { id: 2, text: "Do laundry", done: false },
    { id: 3, text: "Take shower", done: false }
  ];

  return (
    <>
         <Form/>
  </>
  )
}

export default App
