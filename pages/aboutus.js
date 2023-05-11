import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import { BsFacebook, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';


const aboutus = () => {
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
                <h1>About Us</h1>
                <div className='about-us'>
                    <div className=''>
                        Buraaq Mart strives to bring customers the best of the best in quality products and services, at the most competitive prices. Buraaq Mart offers a wide range of products, from household and Kitchen, to Pet and Grocery. With a comprehensive selection of items from top brands, customers can shop confidently knowing they are receiving only the best. The company also offers a variety of services, such as free shipping, convenient payment options, and hassle-free returns. In addition to its excellent selection of products and services, Buraaq Mart also provides customers with a unique and helpful shopping experience.
                    </div>
                    <div className='about-2nd'>

                        <div>
                            <h3>Social Media Links</h3>
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
                            <h3>Pages</h3>
                            <p className='social'>

                                <Link href="/refundpolicy">- Refund Policy</Link>
                                <br></br>
                                <br></br>

                                <Link href="/terms&condition">- Terms and Condition</Link>

                                <br></br>
                                <br></br>


                                <Link href="/contact_us">- Contact Us</Link>
                                <br></br>
                                <br></br>
                                <Link href="/">- Shop</Link>

                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default aboutus