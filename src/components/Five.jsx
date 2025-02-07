import React from 'react'
import { Link } from 'react-router-dom'

const Five = () => {
  return (
    <>
    <div className='md:flex items-center justify-center h-screen md:mt-0 mt-40'>
      <p className='text-2xl font-semibold flex flex-wrap p-4 text-center'>
        Bas kuch der me pahunchne hi wale hai..
        <br />
        Have some patience yaar 😘
      </p>
      <br />
      <div className='flex items-center justify-center'>
      <Link to='/six'>
      <button className='m-10 p-4 bg-black text-white rounded-full font-semibold items-center hover:bg-slate-700'>Jaldi Click kr naa 😛</button>
      </Link>
      </div>
    </div>
    </>
  )

}

export default Five