import React from 'react'

const Label = ({ objectForm }) => {

  return (
    <div>
      {
        objectForm.map( ( x ) => (
          <div key={x.children} className='mb-5' >
            <label htmlFor="" className='text-gray-700 uppercase font-bold'>
              { x.children }
            </label>
           
            <input 
              className='border w-full p-2 mt-2 placeholder-gray-600 rounded-md' 
              type = { x.type }
              placeholder = { x.children } 
            />
      
          </div>
          
        ) )
      }
    </div>
  )
}

export default Label