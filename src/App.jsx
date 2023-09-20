import { useState } from 'react'
import Nav from './components/Nav'
import Banner from './components/Banner'
import { Cards } from './components/Cards'
import Footer from './components/Footer';

function App() {

  const objectCard = [
    {
      title: "Card 1",
      description: "This is the description for Card 1.",
    },
    {
      title: "Card 2",
      description: "This is the description for Card 2.",
    },
    {
      title: "Card 3",
      description: "This is the description for Card 3.",
    },
    {
      title: "Card 4",
      description: "This is the description for Card 4.",
    },
    {
      title: "Card 5",
      description: "This is the description for Card 5.",
    },
    {
      title: "Card 6",
      description: "This is the description for Card 6.",
    },
    {
      title: "Card 7",
      description: "This is the description for Card 7.",
    },
    {
      title: "Card 8",
      description: "This is the description for Card 8.",
    },
  ];
  

  return (
    <>
      <header className=' w-full bg-slate-500 '>
        <Nav className/>
      </header>

      <main >
        <Banner />
        <Cards
          objectCard = { objectCard }
        />
      </main>

        <Footer/>

    </>
  )
}

export default App
