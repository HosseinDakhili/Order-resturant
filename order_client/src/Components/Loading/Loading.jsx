import { PacmanLoader } from 'react-spinners'

export default function Loading() {
  return (
    <section className='flex justify-center items-center h-screen '>
    <PacmanLoader color='red' size={40}/>
    </section>
  )
}