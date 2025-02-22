import React, { useEffect, useState } from 'react'
import useChatStore from '../store/useChatStore'
import { useNavigate } from 'react-router-dom'

function Chat() {
  const [message, setMessage] = useState()



  const { sendMessage, getMessage, my_messages, messages, room, name } = useChatStore()

  getMessage()

  if(room == null){
    const navigate = useNavigate()
    navigate('/')
  }

  const handleMessageInput = (event) => {
    setMessage(event.target.value)

  }

  const handleSubmit = (event) =>  {
    document.getElementById('m').value = ''
    sendMessage(message, room, name)
    console.log(messages)


  }
  
  return (
    <div className='bg-blue-950'>

      <div className='overflow-y-scroll tt h-[90vh] pr-5 pl-5'>
       <div className='msg'>
        {messages.map((i, index) => (
          <div key={index} className={`p-2 ${i.sender === name ? 'rounded-tl-xl rounded-bl-xl rounded-tr-xl text-right bg-blue-200 ml-auto' : 'rounded-tl-xl rounded-br-xl rounded-tr-xl text-left bg-gray-300 mr-auto'} w-fit h-10 msg pb-11 max-w-[70%]  mt-5`}>
            <p className="p-2">{i.text}</p>
            <p className='text-right text-gray-700 text-sm p-0'>{i.sender}</p>
          </div>
        ))}
       </div>
      </div>
      
      <div className='flex border-3 border-t-black h-[10vh] items-center pl-3 pr-3 justify-between'>
        <textarea id="m" onChange={handleMessageInput} placeholder="Bir mesaj yazın ..." className=' bg-gray-600 text-white rounded-sm resize-none cursor-text transition-all duration-75 border-1 border-gray-500 w-[80%] pt-2 pl-3 h-[70%] hover:text-2xl hover:pt-1' />
        <button onClick={handleSubmit} className='cursor-pointer bg-blue-400 w-40 text-white h-[70%] hover:bg-blue-700 font-bold transition-all duration-100 hover:font-normal rounded-sm'> Gönder </button>
      </div>
     


    </div>
  )
}

export default Chat