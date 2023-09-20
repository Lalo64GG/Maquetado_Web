import React from 'react'
import Label from './Label'

const Formulario = () => {

    const objectForm = [
        {
            children:"Email",
            type:"email",
        },

        {
            children: "Password",
            type: "password"
        },

      ]

  return (
    <div className='mx-5 w-1/2 h-1/2'>
        <form action="" className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
            <Label
                objectForm = { objectForm }
            />
            <input 
                value='Enviar'
                type="submit"
                className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors '
            />
        </form>
    </div>
  )
}

export default Formulario