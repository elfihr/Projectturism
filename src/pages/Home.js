import React from 'react'
import Layouts from '../components/Layouts'
import { Link } from 'react-router-dom'
import background01 from '../assets/pexels-pixabay-62623.jpg'
import '../styles/Home.css'

const Home = () => {
  return (
    <Layouts>
      <div className='home' style={{backgroundImage:`url(${background01})`}}>
        <div className='home-Container'>
          <h1>Fihr Travel</h1>
          <p>Transfome seus sonhos</p>
          <p>em Viagens</p>
          <Link to='/circuito'>
            <button>Compre agora!</button>
          </Link>

        </div>
      </div>
    </Layouts>
  )
}

export default Home