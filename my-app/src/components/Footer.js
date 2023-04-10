import './FooterStyles.css'
import React from 'react'
import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
          <div className='Location'>
            <FaHome
            size={20} style={{ color: '#fff', marginRight:"2rem"}}
            />
            <div>
              <p>Nairobi,</p>
              <p>Kenya</p>
            </div>
          </div>
          <div className='mobile'>
          <FaPhone
            size={20} style={{ color: '#fff', marginRight:"2rem"}}
            />
            <div>
              <p>+254746496943</p>
              
            </div>
          </div>
          <div className='email'>
          <FaMailBulk
            size={20} style={{ color: '#fff', marginRight:"2rem"}}
            />
            <div>
              <p>giddymutai64@gmail.com</p>
              <p>giddymutai@gmail.com</p>
              
            </div>
          </div>
        </div>
        <div className='right'>
        <h4>About Me</h4>
        <p> 
          I am Mutai Gideon. I am a react developer. With knowledge in react router, react components, Material-UI, Hook, Bootstrap. I also have extensive knowledge in HTML, CSS, JavaScript, Typescript. I enjoy discussing new projects and designs.
        </p>
        <div className='social'>
        <FaFacebook
            size={20} style={{ color: '#fff', marginRight:"2rem"}}
            />
        <FaLinkedin
            size={20} style={{ color: '#fff', marginRight:"2rem"}}
            />
        <FaTwitter
            size={20} style={{ color: '#fff', marginRight:"2rem"}}
            />
        
        <FaGithub
            size={20} style={{ color: '#fff', marginRight:"2rem"}}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
