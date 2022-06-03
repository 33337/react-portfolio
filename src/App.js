import React, { useState } from 'react'
import Page from './components/Page'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Hero from './assets/hero.jpg'
import Bottom from './assets/bottom.jpg'

function App() {
  const [pages] = useState([
    { name: 'About me' },
    { name: 'Portfolio' },
    { name: 'Resume' }
  ])

  const [currentPage, SetCurrent] = useState(pages[0])

  return (
    <div>
      <img src={Hero} className='hero'></img>
      <Header>
        <Nav pages={pages} SetCurrent={SetCurrent} currentPage={currentPage}></Nav>
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <img src={Bottom} className='bottom'></img>
    </div>
  );
}

export default App;
