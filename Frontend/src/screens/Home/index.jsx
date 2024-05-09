import { useState } from 'react'
import style from '../Home'
import GlobalStyle from '../../components/GlobalStyle'
import Carousel from '../../components/Carousel'
import Banner from '../../components/Banner'
import Separator from '../../components/Separator'
import App from '../../components/Card'
import Footer from '../../components/Footer'
import Navbar from '../../components/Header'
import Cards from '../../components/Card'









function Home() {
  

  return (
    <>

    <GlobalStyle/>
      <Carousel/>
      <Separator/>
      <Cards/>
      <Footer/>
      </>

  
  )
}

export default Home
