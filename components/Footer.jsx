import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>{new Date().getFullYear()} Kicks and Mix Shoppe</p>      
      <p>All rights reserved</p>
      <p className='icons'><AiFillInstagram/><AiOutlineTwitter/></p>
    </div>
  )
}

export default Footer
