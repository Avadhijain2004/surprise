import React from 'react'
import { Link } from 'react-router-dom'

const One = () => {
  return (
    <>
    <div className='md:flex items-center justify-center h-screen md:mt-0 mt-40'>
      <p className='text-xl font-semibold flex flex-wrap p-4 text-center'>
        Tujhe kya lagta hai.......Kalakari sirf tu hi kr sakta hai?? <br />
        Na na, Me bhi kr sakti hu 😎
      </p>
      <br />
      <div className='flex items-center justify-center'>
      <Link to='/two'>
      <button className='m-10 p-4 bg-black text-white rounded-full font-semibold items-center ml-10 hover:bg-slate-700'>Chal ab chup chap yaha click kr</button>
      </Link>
      </div>
    </div>
    </>
  )
}

export default One