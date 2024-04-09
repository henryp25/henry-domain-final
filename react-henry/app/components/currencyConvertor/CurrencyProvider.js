import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { v4 as uuidv4 } from 'uuid';

export const CurrencyContext = React.createContext()
const apiKey =  'fca_live_YOHb38QeHG0e1gmE6iu8TcTyKLbMPByQlycD4quh'

function CurrencyProvider({children}) {
  const [currencies, setCurrencies] = useState([]);

  console.log(`testing: ${apiKey}`)
  
  useEffect(() => {
    console.log(apiKey)
    var url = 'https://api.freecurrencyapi.com/v1/currencies?apikey=' + apiKey
    console.log(url)
    axios.get(url).then((res) => {
      const data = res.data.data;
      let currencyList = Object.entries(data).map(([code,details]) => ({
        id:  uuidv4(),
        code,
        ...details
      }))
      setCurrencies(currencyList)
    }).catch((err) => {
      console.log(`error in fetching currency data: ${err}`)
    } )
  } , [])

  return (
    <CurrencyContext.Provider value={{currencies}}>
      {children}
    </CurrencyContext.Provider>
  )
}

export default CurrencyProvider
