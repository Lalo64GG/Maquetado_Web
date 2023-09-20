import React from 'react'

function Links({ linkObject }) {
  return (
    <div >
        {
            linkObject.map( (links) => (
                <a className=' m-2 w-full h-full hover:bg-indigo-400 transition-colors p-4' key = { links.link } href = { links.link } > { links.children } </a>
            ))
        }
    </div> 
  )
}

export default Links