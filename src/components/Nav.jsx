import React from 'react'
import Links from './Links'

const Nav = () => {


    const linkObject = [
        {
            link: 'home',
            children: "Home"
        },

        {
            link: 'contact',
            children: "Contact"
        },

        {
            link: 'about us',
            children: "About us"
        }
    ]

  return (

    <nav className="bg-indigo-200 py-4 w-full fixed top-0 z-10 " >
    <div className="flex justify-between mx-auto">
      <h1 className="mx-4">Menu</h1>
      <Links
        className="hover:bg-indigo-700 transition-colors"
        linkObject={linkObject}
      />
    </div>
  </nav>
  )
}

export default Nav