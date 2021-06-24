import React from 'react'
import '../styles/containers/Home.css'
import initialState from '../initialState'
import Products from '../components/Products'

function Home() {
    return (
        <div className="Home">
          <Products products={initialState.products}/>
        </div>
    )
}

export default Home
