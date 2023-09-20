import React from 'react'

const TextContainer = ({ children }) => {
  return (
    <div className=' w-4 text-justify h-1/2  text-white flex-1 mx-5  py-10 px-5'>
        <p> { children } </p>
    </div>
  )
}

export default TextContainer