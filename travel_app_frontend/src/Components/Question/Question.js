import React, { useState, useEffect } from 'react'
import ResultArray from './ResultBuild/ResultArray';
import CardArray from './QuestionBuild/CardArray'
import GetCity from './ResultBuild/GetCity'
const googleApiKey = "AIzaSyASydWt1CKvBI1ciV_oMeO3TzmmcGVVm24"


const Question = () => {
    const [display, setDisplay] = useState('City')
    const [city, setCity] = useState('')
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)
    const [numResults, setNumResults] = useState(null)
    const [categories, setCategories] = useState([])
    const [resultsArray, setResultsArray] = useState([])
    const [photo, setPhoto] = useState([])
    let displayPage;

    useEffect(()=>{
        if (lat !== null && lon !== null){
            console.log(lat, lon)
            setDisplay('Card')
        }
    }, [lat,lon])

    useEffect(()=>{
        if (display === 'Card') {
            if (resultsArray.length > 0) {
                setDisplay('Result')
            }
        }
    }, [resultsArray])

    function startAgain(e) {
        if (e) {
        setDisplay('City')
        setCity('')
        setLat(null)
        setLon(null)
        setNumResults(null)
        setCategories([])
        setResultsArray([])
        }
        
    }

    function getCoordsAndResultsCity(event, e) {
        e.preventDefault()
        setCity(e.target[0].value)
        setNumResults(e.target[1].value)
        fetch(`https://api.tomtom.com/search/2/geocode/${e.target[0].value}.json?limit=1&countrySet=CA&key=w9lL7lmL6DnY6nsGPzZQVoF6AcepPNsN`)
        .then(response => response.json())
        .then(data => { console.log(data)
            setLat(data.results[0].position.lat)
            setLon(data.results[0].position.lon)
        })
    }

    function getCategories(val) {
        setCategories(val)
        getResult(val)
        
    }
    
    async function getResult(catArray) {
        console.log(catArray)
        let categoryResultsArray = []
        
        await fetch(`https://api.tomtom.com/search/2/poiSearch/${catArray[0]}.json?limit=${numResults}&countrySet=CA&key=w9lL7lmL6DnY6nsGPzZQVoF6AcepPNsN&lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(data => categoryResultsArray.push(data.results))
        await fetch(`https://api.tomtom.com/search/2/poiSearch/${catArray[1]}.json?limit=${numResults}&countrySet=CA&key=w9lL7lmL6DnY6nsGPzZQVoF6AcepPNsN&lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(data => categoryResultsArray.push(data.results))
        await fetch(`https://api.tomtom.com/search/2/poiSearch/${catArray[2]}.json?limit=${numResults}&countrySet=CA&key=w9lL7lmL6DnY6nsGPzZQVoF6AcepPNsN&lat=${lat}&lon=${lon}`)
        .then(response => response.json())
        .then(data => {
            categoryResultsArray.push(data.results)
            console.log(categoryResultsArray)
            setResultsArray(categoryResultsArray)
        })
    }

    if (display === 'City') {
        displayPage = <GetCity cityFunc={getCoordsAndResultsCity}/>
    } else if (display === 'Card') {
        displayPage = <CardArray catFunc={getCategories}/>
    } else if (display === 'Result') {
        displayPage = <ResultArray poiResultsArray={resultsArray} reset={startAgain}/>
    }

    return(
        <div>
            {displayPage}
        </div>
    )
}
export default Question