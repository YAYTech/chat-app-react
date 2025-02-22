import { create } from 'zustand'
import { io } from 'socket.io-client'

let socket = null

const useChatStore = create((set) => {
     if (!socket) {
          socket = io('http://localhost:3000')
     }

   return {

     name: '',
     room: null,
     messages: [],

     joinRoom: (room, name) => {
          socket.emit('joinRoom',room)
          set({room, name})
     },

     sendMessage: (message,room,name) => {  
          socket.emit('message', {message, room, name})
     },

     getMessage: () => {
          socket.off('message')
          socket.on('message', ({message, name}) => {
               set((state) => ({ messages: [...state.messages, { text: message, sender: name }] }))
          })
     }
}})

export default useChatStore