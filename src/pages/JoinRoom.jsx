import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useChatStore from '../store/useChatStore'

function joinRoom() {
     const [name, setName] = useState('')
     const [room, setRoom] = useState('')

     const { joinRoom } = useChatStore()

     const navigate = useNavigate()

     const handleNameInput = (event) => {
          setName(event.target.value)
     }

     const handleRoomInput = (event) => {
          setRoom(event.target.value)
     }

     const handleSubmit = (event) => {
          joinRoom(room, name)
          navigate('/chat')
     }

  return (
    <div className='flex justify-center pt-60'>
      <div className='flex justify-center shadow-gray-400 shadow-2xl bg-gray-50 border-2 border-gray-200  w-100 pb-10 pt-5 rounded-sm ml-5 mr-5'>
        <div className='flex flex-col w-50'>
          <input type="text" placeholder='İsim' onChange={handleNameInput} className='border-1 cusor-text rounded-sm mt-5 pl-2' />
          <input type="text" placeholder='Oda İsmi' onChange={handleRoomInput} className='border-1 cusor-text rounded-sm mt-5 pl-2' />
          <button onClick={handleSubmit} className='bg-blue-400 mt-5 rounded-sm text-blue-100'>Odaya Katıl</button>
        </div>
      </div>
    </div>
  )
}

export default joinRoom