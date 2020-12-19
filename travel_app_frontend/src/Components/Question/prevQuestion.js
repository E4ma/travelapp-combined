import React, {useState} from 'react'


const personalities = [
    'Adventurous',
    'Relaxing',
    'Spiritual',
    'Traditional',
    'Spontaneous'
]

const Question = ({user}) => {
 
    const [personality, setPersonality] = useState("")
    const [city, setCity] = useState("Loading")
    const [result, setResult] = useState([])
    const [location, setLocation] = useState([])
    const [lon, setLon] = useState("")
    const [lat, setLat] = useState("")

    const usersPersonalites = personalities.map((personal,i)=>{
        return (
            <div key={personal.toString()}>
                <label htmlFor={i}><p>{personal}</p></label>
                <input 
                name='personalitySelection' 
               
                id={i} 
                type="radio"
                onClick={(e)=>{
                    setPersonality(e.target.defaultValue)
                }}
                value={personal}/>
                <br/>
            </div>
        )
    })

    function matchCity(personalityResult) {
        let options = {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({personality: personalityResult})
        }
        fetch('http://localhost:3000/questions', options)
        .then(response => response.json())
        .then(data => {
            const searchCity = data
            setCity(data)
            console.log(searchCity)
            fetch(`https://www.mapquestapi.com/search/v2/radius?origin=${searchCity}&radius=50&maxMatches=5&ambiguities=ignore&hostedData=mqap.ntpois|group_sic_code=?|703301&outFormat=json&key=zEOA7EFpBlhIdscffyFHdMO1PthS2OVM`

            ).then(response => response.json())
            .then(data=>{
                setResult(data.searchResults)
                setLon(data.searchResults[0].fields.lng)
                setLat(data.searchResults[0].fields.lat)
            console.log(data.searchResults, data.searchResults[0].fields.lat)
           
            }).then(()=>setLocation([]))
        })
        
        
    }

    
    const displayResult = result 
    ?result.map((data,i)=>{
        return <h5 key={i}>{i+1}--{data.fields.group_sic_code_name}--{data.fields.name}--{data.fields.phone}</h5>
    })
    :null



    const onSubmitLocation = ()=>{
        fetch(`https://api.tomtom.com/search/2/search/resort.json?countrySet=CA&lat=${lat}&lon=${lon}&radius=5000&key=cGrI2bj3NGTOdZonqxpJnqGn31YxqZLi`)
        .then(response => response.json())
        .then(data=>{
             console.log(data.results)
             setLocation(data.results)
       
        })

    }

    const displayLocation = location 
    ?location.map((data,i)=>{
        return <h5 key={i}>{i+1}--{data.poi.name}--{data.poi.phone}</h5>
    })
    :null
    
    
    return ( 
        <React.Fragment>
        <div id="main-question-area" className="mw-100 mw8-ns center ph5-l ph4 z-1 relative mt4">
            
            <h3 className='f3 mb3 db tc'>Welcome {user.name}</h3>
            <h3 className='mb3 fw8 pb2 pr3 tc'>What is your travel personality?</h3>
            <form id="question-form" className="personality-selectors">
                {usersPersonalites}
                <button disabled={!personality} onClick={(e) => {
                    e.preventDefault()
                    console.log(personality)
                    matchCity(personality)
                    
                }}>
                    Submit
                </button>
            </form>

        </div>
        {city !== 'Loading'
        ?
        <div id="result-area" className="mw-100 mw8-ns center ph5-l ph4 z-1 relative mt4">
           <p className='tc i f4 blue'>Drum ROLL!!! Your vacation destination is ...</p>
           <p className='f2 mb3 db tc'>
              {city}
            </p>
            {displayResult}
            <p className='f4 mt3 mb3 i tc'>Click <button className='underline i grow' onClick={onSubmitLocation}>here</button> to view resort locations in your vacation destination</p>
            
            {displayLocation}
        </div>
        :
                null
        }
        <hr/>
        
        </React.Fragment>
     );
}
 
export default Question;