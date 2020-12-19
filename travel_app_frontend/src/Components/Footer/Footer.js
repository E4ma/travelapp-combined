import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faTwitter ,faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'


function App() {
  return (
    <div id="footer-main-container">
     

      <React.Fragment >
        <div className='footer-container mt-5'>
    <div className='office-container pt-4'>      
      <h5 className='pr-5'>1234, 25 Ave SW, Calgary</h5>
      <h5 className='pr-5'><a href="tel:403-123-4567">Phone: 403-123-4567</a></h5>
      <h5><a href="mailto:travel_app@gmail.com">email: info@roamin.com</a></h5>
      </div>

        <div className='social-container'>       
      <FontAwesomeIcon icon={faTwitter}  />&nbsp;
      <FontAwesomeIcon icon={faFacebookF} />&nbsp;
      <FontAwesomeIcon icon={faInstagram} />  
      </div>
      </div>

      </React.Fragment>
    
    </div>
  );
}

export default App;