import React from 'react'
import CardInfo from './CardInfo'
import "./cardstyle.css"


const imageInfo = [
    `${process.env.PUBLIC_URL}/LandingPageImages/historical.jpg`,
    `${process.env.PUBLIC_URL}/LandingPageImages/mystery.jpg`,
    `${process.env.PUBLIC_URL}/LandingPageImages/adventure.jpg`,
    `${process.env.PUBLIC_URL}/LandingPageImages/spiritual.jpg`,
    `${process.env.PUBLIC_URL}/LandingPageImages/relaxing.jpg`
]
const imageTitles = [
    'His·tor·i·cal',
    'Mys·ter·y',
    'Ad·ven·ture',
    'Spir·it·tu·al',
    'Re·lax·ing'
]
const imageDescriptions = [
    'A natural historian and enthusiast of times long past',
    'Never satisfied with ordinary always trying new things',
    'An adrenaline junkie and pursuer of high-paced fun',
    'In tune with the divine through nature and life',
    'Easy-going and mild-natured, hakuna-matata'
]

const imageActivities = [
    ['Zoo', 'Museum','Art Gallery'],
    ['Theatre', 'Karaoke','Shooting Range'],
    ['Hiking', 'Skiing','Snowboarding'],
    ['Garden', 'Hiking','Cultural Centre'],
    ['Bar', 'Beach','Restaurant']
]
function imageMap(info, title, desc, actions) {
    let imageObjs = []
    for (let i = 0; i < info.length; i++){
        let myObj = {
            imageUrl: info[i],
            imageTitle: title[i],
            imageDescription: desc[i],
            imageActivity: actions[i]
        }
        imageObjs.push(myObj)
    }
    return imageObjs;
}

let imageArray = imageMap(imageInfo, imageTitles, imageDescriptions, imageActivities);

const CardArray = ({catFunc}) => {
    return(
        <div className='container' >
            {imageArray.map((item, i)=>{
                return (
                    <CardInfo key={i} cardTitle={item.imageTitle} cardImage={item.imageUrl} cardDescription={item.imageDescription} activities={item.imageActivity} categoryFunc={catFunc}/>
                )
            })}
        </div>
    )
}


export default CardArray