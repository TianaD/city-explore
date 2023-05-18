import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';

function App() {
  const [cityName, setCityName] = useState("");
  const [displayCityName, setDisplayCityName] = useState("");
  const [locationError, setLocationError] = useState(false);
  const [displayErrorMessage, setDisplayErrorMessage] = useState("");
  const [cityMap, setCityMap] = useState(false);
  const [latAndLon, setLatAndLon] = useState({});
  const updateCityName = (event) => {
    // event updates value of setCityName 
    setCityName(event.target.value);
  }

  //this is being sent by the user
  let getLocation = async function() {
    const locationAPI = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${cityName}&format=json`;
    
    // data fetched from API will update state 
    let response;
    try {
      response = await Axios.get(locationAPI)
      // console.log("reee")

      // use data being retrieved and set equal to the city that will be displayed
      setDisplayCityName(response.data[0])
      setLocationError(false)
      setCityMap(true)
      // console.log(response.data[0])
      setLatAndLon(response.data[0])
    

    // <================================================================================================> Catching Error Messages <========================================================================================>
    }
    catch (error) {
 
      setLocationError(true)
      setDisplayErrorMessage(error.response.status + ': ' + error.response.data.error) //returns error number status
      setCityMap(false)

    }

    // <=====================================================================================================> Map Display <====================================================================================================>


    // .then((response) => {
    //   return response.data;
    // })
    // .catch((error) => {
    //   if (error.response) {
    //     console.log("Data :", error.response.data);
    //     console.log("Status :" + error.response.status);
    //   } else if (error.request) {
    //     console.log(error.request);
    //   } else {
    //     console.log('Error', error.message);
    //   }
    // })

  }

  // this is where information is rendered -- in return 
  return (


    <div style={{}} >

      {/* form is a child component of main */}
      {/* make API call on onSubmit  */}
      {/* 1. API string */}
      {/* 2. variable = axios.get */}
      {/* 3. set variable to state */}
      {/* Axios.setCityName("pk.05bf7ae48044d1b823aa7091396448b8") */}
      {/* Axios.setCityName("https://gregarious-puppy-6c19d0.netlify.app") */}
      <Form onSubmit={async (event) => {
        event.preventDefault()
        await getLocation()

      }}>
        {/* this form contains a filter of the dif. num. of horns */}
        <Form.Group>

          <Form.Label>
            City Name
          </Form.Label>
          <Form.Control onChange = {updateCityName}
            type="text"
            placeholder="Enter City"
          // set input event to control then use the setCityName function 
          />
          <Button type="submit" value="submit">
            EXPLORE
          </Button>

          {/* <input onClick={() => { console.log("You Clicked Explore") }} type="submit" value="Explore" /> */}
          {/* <input onClick={() => {setCityName}} type="submit" value="Explore" /> */}

        </Form.Group>

      </Form>
      {/* <p>{cityName}</p> */}
      <h1>{displayErrorMessage}</h1>
      <img src={latAndLon?.lon && latAndLon?.lat ? `https://maps.locationiq.com/v3/staticmap/?key=${process.env.REACT_APP_KEY}&center=${latAndLon?.lat},${latAndLon?.lon}&zoom=12` : ""} alt="map"></img>
    </div>



  );
}
// render() {}

export default App;
