/* eslint-disable no-unused-vars */
import React from 'react';
import Container from '../Container/Container';
import resume from '../../assets/projects/Resume.jpg'
import ReactToPdf from 'react-to-pdf'
import { FaDownload } from 'react-icons/fa';


const Resume = () => {
    const ref = React.createRef();

    return (
        <Container>
            <h1 className='text-center text-slate-400 text-5xl my-8'> My 
            <br />
            Resume
            </h1>
            <div>
             <ReactToPdf targetRef={ref} filename="resume.pdf">
            {({toPdf}) => (
            <button onClick={toPdf} className="bg-[#DAED1A] text-gray-700 px-5 py-4 flex items-center  gap-2 rounded-md hover:bg-[#dae766] transition duration-300 shadow-md hover:text-gray-700">
              Download Resume <FaDownload />
            </button>
            )}
            </ReactToPdf>
            
            
            </div>
            <div className='my-2' ref={ref}>
                <img src={resume} alt="" />
                
            </div>
        </Container>
    );
};

export default Resume;
