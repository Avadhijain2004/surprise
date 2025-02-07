import React from 'react'
import { Link } from 'react-router-dom'

const Four = () => {
  return (
    <>
    <div className='md:flex items-center justify-center h-screen md:mt-0 mt-40'>
      <p className='text-2xl font-semibold flex flex-wrap p-4 text-center'>
        Arey yaar ese haar ni maante...
        <br />
        Chalo Chalo aage badho
      </p>
      <br />
      <div className='flex items-center justify-center'>
      <Link to='/five'>
      <button className='m-10 p-4 bg-black text-white rounded-full font-semibold items-center hover:bg-slate-700'>
        Firse yaha pe click karo 😁
        </button>
      </Link>
      </div>
    </div>
    </>
  )
}

export default Four