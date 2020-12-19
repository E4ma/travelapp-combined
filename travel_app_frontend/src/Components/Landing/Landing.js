import React from 'react';
import './Landing.css'
import Goo from './Goo';
// import NavbarPage from './LandingPageComponents/NavbarPage'
import MainText from './LandingPageComponents/MainText'
// import ImageLarge from './LandingPageComponents/ImageLarge';
import MainButton from './LandingPageComponents/MainButton'



const Landing = ({onRouteChange})=> {

 
        const largeMessage = "Adventure is waiting"
        const mediumMessage = "Just follow a few simple steps to find your next big adventure!"
        const signIn = "sign in/ register"
        
        return (
            
            <div className="container background tc">
              
                {/* <div className="row"> */}
                <Goo />
                    <div className="col">
                       {/* <ImageLarge />  */}
                       
                      <div className='white'>  <MainText largeMessage={largeMessage} mediumMessage={mediumMessage} /> </div>
                       <div className='mb6 mt5'> <MainButton onRouteChange={onRouteChange} text={signIn}/> </div>
                    </div>
                    
                {/* </div> */}
            </div>
        )
    
}

export default Landing