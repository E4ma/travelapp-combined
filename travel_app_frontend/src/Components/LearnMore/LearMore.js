import React from 'react';
import travel from './travel.jpg';
import './LearnMore.css'
//import hiking from './hiking.jpg';

const styles = {
  labelText: {
     fontFamily: "Roboto",
    //  fontSize: "1.3rem",
     color: "#357E85",
 }
}

const LearnMore = ({onRouteChange}) =>  {
  return(
    <div style={styles.labelText} className="mx-5 bodyImage">
      
      <div  className="ui p-2 center aligned container body"> 
       <h1 className="wrap"> Welcome to Roamin`!</h1>
        </div>

      <div className="ui center aligned container my-3">
      <p><h1><b>3 Simple Steps to find your next exciting experience in town</b></h1></p>
        
       {/* <a href='./'>Explore your experiences</a> */}
     </div>
     <div className=" ui center aligned container"> 
     <p><h3>If you ever needed to experience a little 'out of house' experience  without booking a flight, you are in the right place.
         To discover fun activities around you, take these 3 simple steps.</h3>
       </p>
        </div>
         {/* <img className="ui fluid image" fluid src={travel} alt="" size='big' ></img> */}

     <div className="ui my-2 stackable three column grid">
       <div className="column">
          <div className="ui grow raised segment">
           <div >
             <img className="ui fluid image" fluid src={travel} alt="" size='mini'></img>
             <button onClick = {()=>onRouteChange('signin')} ><h4>Sign up/Login</h4></button>
           </div>
         </div>
       </div>

       <div className="column">
          <div className="ui raised grow segment">
           <div>
             <img className="ui fluid image" fluid src={travel} alt="" size='mini'></img>
             <h4>Input your city and number of results</h4>
           </div>
         </div>
       </div>

       <div className="column">
          <div className="ui grow raised segment">
           <div >
             <img className="ui fluid image" fluid src={travel} alt="" size='mini'></img>
             <h4>Pick a vacation personality type </h4>
           </div>
         </div>
       </div>
       <a href='https://www.freepik.com/vectors/car'>Car vector created by pch.vector - www.freepik.com</a>
     </div>
    </div>
    
    

    
  )
};


export default LearnMore;