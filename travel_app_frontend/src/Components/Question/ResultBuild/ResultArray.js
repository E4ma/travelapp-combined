import React,{ useState } from 'react'
import Result from './Result'
import { Button } from 'react-bootstrap'

const ResultArray = (props) => {
    // const [restart, setRestart] = useState('false')
    //need to accept props of queries and lat and lon or city
    // need func to make array of result cards for each query
    // need result card to accept props for name, address, website, category and picture

    function runReset(e) {
        props.reset(e)
    }
    
    return(
        <div>
            <Button 
            onClick={runReset} 
            variant="outline-info" 
            size="lg" 
            style={{margin: "20px", position: "fixed"}}>Back to start</Button>
            {props.poiResultsArray.map((smallArray)=>{
               return(smallArray.map((item, i)=>{
                     return <Result 
                     key={i}
                     name={item.poi.name} 
                     phoneNumber={item.poi.phone} 
                     url={item.poi.url} 
                     address={item.address.freeformAddress} 
                     category={item.poi.categories[0]}
                     lat={item.position.lat}
                     lon={item.position.lon}
                     />
                }))
            })}
            
        </div>
    )
}

export default ResultArray 