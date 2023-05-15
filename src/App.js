import logo from './logo.svg';
import './App.css';
import React from 'react';
import Form from 'react-bootstrap/Form';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from 'axios';

function App() {
  const [cityName, getCityName] = useState();
  // const API = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_KEY}&q=${this.state.searchQuery}&format=json`;
  let userInput = "Miami";
  async function getLocation() {


    let whatever = await Axios.get(`https://us1.locationiq.com/v1/search?key=pk.05bf7ae48044d1b823aa7091396448b8&q=${userInput}&format=json`).then((response) => {
      return response.data;
    })
    console.log("whatever",whatever[0][0])
    let returnedData = whatever.map((value, index) => {
      return <h1>{value.display_name} {value.lat} {value.lon}</h1>
    })
    // console.log(whatever.lon)
    getCityName(whatever[0])
    // console.log(cityName)
  }
  // function updateCityName(event) {
    // call getCityName function and pass in event.target.value 
    // getCityName(event.target.value)
  // }
  return (


    <div style={{}} >

      {/* form is a child component of main */}
      {/* make API call on onSubmit  */}
      {/* 1. API string */}
      {/* 2. variable = axios.get */}
      {/* 3. set variable to state */}
      {/* Axios.getCityName("pk.05bf7ae48044d1b823aa7091396448b8") */}
      {/* Axios.getCityName("https://gregarious-puppy-6c19d0.netlify.app") */}
      <Form onSubmit={(event) => {
        event.preventDefault()
        getLocation()
      }}>
        {/* this form contains a filter of the dif. num. of horns */}
        <Form.Group>

          <Form.Label>
            City Name
          </Form.Label>
          <Form.Control onChange={(event) => {
            userInput = event.target.value;
          }}
            type="text"
            placeholder="Enter City"
          // set input event to control then use the getCityName function 
          />
          <Button type="submit" value="submit">
            EXPLORE
          </Button>

          {/* <input onClick={() => { console.log("You Clicked Explore") }} type="submit" value="Explore" /> */}
          {/* <input onClick={() => {getCityName}} type="submit" value="Explore" /> */}

        </Form.Group>

      </Form>
      {/* <p>{cityName}</p> */}
      <img src={cityName?.lon && cityName?.lat ? `https://maps.locationiq.com/v3/staticmap/?key=${process.env.REACT_APP_KEY}&center=${cityName?.lat},${cityName?.lon}&zoom=12` : ""} alt="map"></img>
    </div>



  );
}
// render() {}

export default App;
