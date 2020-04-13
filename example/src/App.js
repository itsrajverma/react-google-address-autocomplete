import React from 'react'

import {GoogleAddressAutocomplete} from 'react-google-address-autocomplete'
import 'react-google-address-autocomplete/dist/index.css'

const App = () => {
  return <GoogleAddressAutocomplete
    apikey='AIzaSyAVrlUa2e0KvXTd-Cr0aWJpp4EyUKRQv0k'
    placeselected={(place) => console.log("Parent place", place)}
  />
};

export default App
