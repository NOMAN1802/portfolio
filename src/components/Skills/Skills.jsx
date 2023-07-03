/* eslint-disable no-unused-vars */
import React from 'react';
import HTML from '../../assets/html.png'
import CSS from '../../assets/css.png'
import Tailwind from '../../assets/tailwind.png'
import Bootstrap from '../../assets/bootstrap.png'
import JavaScript from '../../assets/javascript.png'
import ReactImg from '../../assets/react.png'
import Github from '../../assets/github.png'
import Firebase from '../../assets/firebase.png'
import Lottie from "lottie-react";
import about from '../../assets/skills.json'
import Container from '../Container/Container';
import { FaDownload } from 'react-icons/fa';


function Skills() {

  return (
    <Container >
        <div className="skills-heading">
        <h1 style={{fontFamily: 'cursive', fontSize: '25px'}} className='text-center font-bold'>Skills</h1>
                <div className="my-8 mx-4">
            <div className='grid sm:grid-cols-1 md:grid-cols-2'>
                
            <div className='font-bold my-4'>
            <p style={{fontFamily: 'cursive', fontSize: '20px'}} className='text-3xl text-slate-400 my-4'>About Me <br /> &
            Service</p>
            <span style={{fontFamily: 'cursive', fontSize: '18px'}} className='text-slate-400'>Hi. I am Mustakim Al Noman, nice to meet you. Please take a look around.
            I am passionate about building excellent software that improves  
            the lives of those around me. I specialize in creating software for  
            clients ranging from individuals and small-businesses all the way  
            to large enterprise corporations. What would you do if you had a  
            software expert available at your fingertips?. I am specializing in 
            building (and occasionally designing) exceptional digital experiences.  
            Currently, I am focused on building responsive web applications.</span>
            </div>

            <div className=' my-4'>
            <Lottie animationData={about} loop={true} />
            </div>
        </div>
       
            </div>
           
        </div>
        <div className="skills-items">
            <div className="s-items ">
                <img src={HTML} alt="" />
                <p>HTML</p>
            </div>
            <div className="s-items">
                <img src={CSS} alt="" />
                <p>CSS</p>
            </div>
            <div className="s-items">
                <img src={Tailwind} alt="" />
                <p>TAILWIND CSS</p>
            </div>
            <div className="s-items">
                <img src={Bootstrap} alt="" />
                <p>BOOTSTRAP</p>
            </div>
            <div className="s-items">
                <img src={JavaScript} alt="" />
                <p>JAVASCRIPT</p>
            </div>
            <div className="s-items">
                <img src={ReactImg} alt="" />
                <p>REACT JS</p>
            </div>
            <div className="s-items">
                <img src={Github} alt="" />
                <p>GITHUB</p>
            </div>
            <div className="s-items">
                <img src={Firebase} alt="" />
                <p>FIREBASE</p>
            </div>
        </div>
    </Container>
  )
}

export default Skills;