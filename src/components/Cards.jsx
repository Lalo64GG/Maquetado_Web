import React from 'react'

export const Cards = ({ objectCard }) => {
  return (
    <div className='flex flex-wrap p-6 px-8 justify-between'>

      {
        objectCard.map((info)=> (
          <div key={info.title} className="card w-96 bg-sky-300 shadow-xl mt-10 m-4" >
          <div className="card-body">
            <h2 className="card-title">{ info.title }</h2>
            <p>{ info.description }</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Show more!</button>
            </div>
          </div>
        </div>
        ))
      }

    </div>
  )
}
