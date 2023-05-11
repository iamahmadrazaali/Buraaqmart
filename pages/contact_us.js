import React from 'react';
import Head from 'next/head';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
const contactUs = () => {
  return (
    <div>
      <Head>
        <title>Buraaq Mart - Ecommerce</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <div className='contact-div'>
        <h1>Contact Us</h1>
        <div className='contact-us'>
          <div className='contact-child'>
            We’d love to hear from you! Whether you have a question, a concern, or just want to say hello, please don’t hesitate to contact us.
            <br></br>
            <br></br>
            Email: Support@buraaqmart.com
            <br></br>
            <br></br>
            Phone Number: (772) 758-4636
            <br></br>
            <br></br>
            Address:  7901 4th St STE 300 Petersburg , Florida , USA
            <br></br>
            <br></br>
            <p className='social'>


              <a href='https://www.facebook.com/profile.php?id=100085423490389'><BsFacebook /></a>
              <br></br>
              <br></br>

              <a href='https://www.instagram.com/buraaqmart/'><AiFillInstagram /></a>
              <br></br>
              <br></br>

              <a href='https://twitter.com/Buraaqmart'><AiOutlineTwitter /></a>
              <br></br>
              <br></br>
              <a href='https://www.linkedin.com/in/buraaq-llc-509976261/'><BsLinkedin /></a>
            </p>
          </div>
          <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3527.8755282648285!2d-82.64073382539723!3d27.844363469436512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s7901%204th%20St%20STE%20300%20Petersburg!5e0!3m2!1sen!2s!4v1683649721090!5m2!1sen!2s" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default contactUs