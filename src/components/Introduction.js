import React from 'react';
import { Image } from 'react-bootstrap';
import NewsLogo from '../assets/news logo.png';

const Introduction = () => (
  <div>
    <Image src={NewsLogo} alt="news Logo" className="img-fluid" />
  </div>
);

export default Introduction;
