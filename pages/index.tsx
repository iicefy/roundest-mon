import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center gap-8'>
      <div className='text-2xl text-center'>Which is roundest</div>
      <div className='border rounded p-8 flex justify-between max-w-2xl items-center gap-8'>
        <div className='w-16 h-16 bg-red-400 flex justify-center items-center'>test</div>
        <div className='text-xl'>Vs</div>
        <div className='w-16 h-16 bg-red-400 flex justify-center items-center'>test</div>
      </div>
    </div>
  )
}

export default Home
