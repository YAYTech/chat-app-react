import React, { useEffect, useState } from 'react'
import useChatStore from '../store/useChatStore'
import { useNavigate } from 'react-router-dom'

function Chat() {
  const [message, setMessage] = useState()
  const [warning, setWarning] = useState()



  const { sendMessage, getMessage, my_messages, messages, room, name } = useChatStore()
  const scroll = document.getElementById('scrollable')
  getMessage(scroll)



  useEffect(() => {
    const scroll = document.getElementById('scrollable')
    if (scroll) {
      scroll.scrollTop = scroll.scrollHeight
    }
  }, [messages])

  const handleMessageInput = (event) => {
    const trimmedMessage = message
    setMessage(event.target.value)
    const btn = document.getElementById('btn')

  }

  const handleSubmit = (event) =>  {
    document.getElementById('m').value = ''
    if(message.trim() === ''){
      setWarning(true)
    }else{
      setWarning(false)
      sendMessage(message, room, name)
      setMessage('')
    }
  }
  const navigate = useNavigate()
  const navigateToMainPage = () => {

    navigate("/")
  }
  
  return (
    <div className='my_bg'>

      <div id="scrollable" className='overflow-y-scroll scrollbar tt h-[90vh]  '>
      <div className='opacity fixed h-[6vh] flex w-full items-center pl-4'>
        <button onClick={navigateToMainPage} className='bg-red-400 text-gray-200 text-md h-[5vh] w-[15%] rounded-sm'> ÇIKIŞ </button>
      </div>
       <div className='msg'>
        {messages.map((i, index) => (
          <div key={index} className={`p-2 ${i.sender === name ? 'rounded-tl-xl mr-5 rounded-bl-xl rounded-tr-xl opacity text-right ml-auto' : 'rounded-tl-xl rounded-br-xl rounded-tr-xl ml-5 text-left opacity  mr-auto'} w-fit h-[auto] msg text-sm text-gray-200 max-w-[50%]  max-h-[100px] mt-6 shadow-2xl duration-100  hover:shadow-3xl`}>
            <div className='absolute -top-2 left-0 right-0 text-left text-xs mb-0 text-gray-300'>
              <p className='text-left text-xs mb-0 text-gray-300 '>{i.sender}</p>
            </div>
            <p className="p-2">{i.text}</p>


          </div>
        ))}
       </div>
      </div>
      
      <div className='flex h-[10vh] items-center pl-3 pr-3 justify-between'>
        <textarea id="m" onChange={handleMessageInput} placeholder="Bir mesaj yazın ..." className='opacity bg-gray-600 text-white rounded-sm resize-none cursor-text transition-all duration-75 border-1 border-gray-500 w-[80%] pt-2 pl-3 h-[70%] hover:text-2xl hover:pt-1' />
        <button onClick={handleSubmit} id="btn" className='cursor-pointer bg-blue-400 w-40 text-white h-[70%] hover:bg-blue-700 font-bold transition-all duration-100 hover:font-normal rounded-sm'> Gönder </button>
      </div>
     


    </div>
  )
}

export default Chat