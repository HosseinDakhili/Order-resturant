import React from 'react'
import {Toaster } from 'react-hot-toast'
import { RouterProvider } from 'react-router-dom'
import router from './routes'
import Loading from './Components/Loading/Loading'

export default function App() {
  return (
    <>
     <Toaster/> 
    <RouterProvider router={router} />
    </>
  )
}
