import React from 'react'
import NewsLogo from '../assets/news logo.png'
import { Image } from 'react-bootstrap'

const Introduction = () => {
  return (
    <div>
       <Image src={NewsLogo} alt="news Logo" className="img-fluid" />
    </div>
  )
}

export default Introduction
