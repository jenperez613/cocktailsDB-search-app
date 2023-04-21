import React from 'react'
import { Link } from 'react-router-dom'
import NotFound from '../assets/404.svg'

const ErrorPage = () => {
  return (
    <section className='error-page section'>
      <div className='error-container'>
        <h2 className='title'>404</h2>
        <p className='subtitle'>page not found</p>
        <Link to='/' className='btn'>
          home
        </Link>
        <img src={NotFound} alt='404' className='error-img' />
      </div>
    </section>
  )
}

export default ErrorPage
