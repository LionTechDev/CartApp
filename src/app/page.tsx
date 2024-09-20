'use client'
import React from 'react'
import { addTextToDb } from './actions'

const Home = () => {
  return (
    <form>
      <input
        type='text'
        name='text'
        id='text'
        className='border'
      />
      <button
        formAction={addTextToDb}
        className='bg-orange-400'
      >
        Agregar texto a la db
      </button>
    </form>
  )
}

export default Home
