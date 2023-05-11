import React from 'react';
import { AiOutlineTwitter} from 'react-icons/ai';
import { BsLinkedin} from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Copyright © 2023 All rights reserved | Buraaq Mart</p>
      <p>Developed By: Ahmad Raza</p>
      <p className="icons">
        <a href='https://www.linkedin.com/in/ahmad-razaa/'><BsLinkedin /></a>
        <a href='https://www.linkedin.com/in/ahmad-razaa/'><AiOutlineTwitter /></a>
        
        
      </p>
    </div>
  )
}

export default Footer