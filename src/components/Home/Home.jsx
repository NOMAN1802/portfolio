/* eslint-disable no-unused-vars */
import React from 'react';
import Lottie from "lottie-react";
import about from '../../assets/about.json';
import portImage from '../../assets/noman.jpg';
import Typed from 'react-typed';
import { Link } from 'react-scroll';
import Container from '../Container/Container';

const Home = () => {
    return (
        <Container>
            <div className="flex my-8 mx-4">
                <div className='w-1/2 font-bold my-4'>
                    <div className='Hero' id='home'>
                        <div className="wrapper">
                            <img src={portImage} alt="" />
                            <div className="typed">
                                <h1 style={{fontFamily: 'cursive', fontSize: '20px'}} className='my-4'>I am</h1>
                                <span style={{fontFamily: 'cursive', fontSize: '20px'}}><Typed strings={[' Mustakim Al Noman', 'A React JS Developer']} typeSpeed={100} backSpeed={30} loop /></span>
                            </div>

                            <Link to='contact' smooth={true} duration={1200} className="btn hero-btn">Contact Me</Link>
                        </div>
                    </div>

                </div>

                <div className='w-1/2 my-8'>
                    <Lottie animationData={about} loop={true} />

                </div>
            </div>
        </Container>
    );
};

export default Home;