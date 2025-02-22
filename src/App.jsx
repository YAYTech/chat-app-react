import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import JoinRoom from './pages/joinRoom'
import Chat from './pages/Chat'
import NotFoundPage from './pages/NotFoundPage'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<JoinRoom  />}/>
        <Route path="/chat" element={<Chat  />}/>
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </>
  )
}

export default App
