import React from 'react';
import tourist from './tourist.jpg';
import './LandingNew.css';
import { Image } from 'semantic-ui-react';

const styles = {
  labelText: {
     fontFamily: "Roboto",
    //  fontSize: "1.3rem",
     color: "#357E85",
 }
}


//import ReactDOM from 'react-dom';

const  mainText = 'Your next adventure is just around the corner'
const mainParagraph = 'Join Roamin` and discover amazing adventures around you in seconds'
 

const LandingNew = () => {
  return (

    <div  className="container-landing mx-5">  
    <div  className="landingText">
    <h1 className="h1text ">{mainText}</h1>
      <h3>{mainParagraph}</h3> 
    </div>

      <Image src={tourist} size='massive' />
      {/* <img class="ui fluid image" fluid src={tourist} alt="" size='medium' ></img> */}
        
        
      </div>
    
       
     

  )
}

 export default LandingNew;