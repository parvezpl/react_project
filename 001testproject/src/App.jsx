import { useState } from 'react'
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Layout from './components/layout/layout';



function App() {


  return (
    <>
      <Header/>
        <main>
          <Layout/>
        </main>
      <Footer/>
    </>
  )
}

export default App
