import React, { useState } from 'react'

import '../styles/App.css';
  
const data = {
  '2018': [
    'Avengers 1',
    'Now you see me',
    'Fast and Furious 7'
  ],
  '2019': [
    'Avengers 2',
    'Now you see me 2',
    'Fast and Furious 8'
  ],
  '2020': [
    'Final Avengers Movie(Iron man dies)',
    'Now you finally used Lenskart',
    'Covid Came'
  ],
  '2021': [
    'Covid Returns',
  ],
  '2022': [
    'Adventures of Saiman',
    'Adventures of Shaktiman'
  ]
}
 
const App = () => {
  const [year,setYear] = useState('');
  const onChangeHandler = (event) => {
    console.log("value is "+event.target.value)
    console.log(data[year]);
    setYear(event.target.value)
 }
 console.log(Object.keys(data))
  return (
    <div id="main">

        <select value={year} onChange={onChangeHandler}>
          <option ></option>
          {(Object.keys(data)).map((y,index) => {
            return <option  key={index}>{y}</option>
          })}
        </select>
        <div id="selected-year">
              Selected year-{year}
              <ul>
                  {year?data[year].map(y => {
                  return (
                    <li>{y}</li>
                  )
                }):'No year selected'}
              </ul>
        </div>
    </div>
  )
}


export default App;
