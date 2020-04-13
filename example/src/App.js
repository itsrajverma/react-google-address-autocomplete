import React from 'react'

import {GoogleAddressAutocomplete} from 'react-google-address-autocomplete'
import 'react-google-address-autocomplete/dist/index.css'

const App = () => {
  return <GoogleAddressAutocomplete
    apikey='AIzaSyA15J1FkkLtCM6Z4wXcOIplOLmUnkfLaes'
    placeselected={(place) => console.log("Parent place", place)}
  />
};

export default App
