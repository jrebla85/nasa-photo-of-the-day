import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function Body() {
    const [imgData, setImgData] = useState('')
    
    const [nasaDescripton, setNasaDescription] = useState('')

    useEffect (() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=0wwfsFmFCb3e6xzgg5X4j7m6I5DsZkAicrK0ETm8`)
      .then(res => setImgData(res.data.url))
    }, [imgData])

    useEffect (() => {
      axios.get(`https://api.nasa.gov/planetary/apod?api_key=0wwfsFmFCb3e6xzgg5X4j7m6I5DsZkAicrK0ETm8`)
      .then(res => setNasaDescription(res.data.explanation))
    }, [nasaDescripton])

      return (
        <div className="imgContainer">
          <img src={imgData}/>
          <div>
            <h3>{nasaDescripton}</h3>
          </div>
        </div>
      )
}