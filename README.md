# react-google-address-autocomplete

> Input that uses Google&#x27;s autocomplete API for street addresses

[![NPM](https://img.shields.io/npm/v/react-google-address-autocomplete.svg)](https://www.npmjs.com/package/react-google-address-autocomplete) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-google-address-autocomplete
```

## Usage

```tsx
<GoogleAddressAutocomplete
    apikey='AIzaSyA15J1FkkLtCM6Z4wXcOIplOLmUnkfLaes'
    placeselected={(place) => {
      if(place){
        alert("You selected: " + place.formatted_address)
      }
    }
    }
  />
```

## Live Example

https://mikebski.github.io/react-google-address-autocomplete/

## License

MIT © [mikebski](https://github.com/mikebski)
