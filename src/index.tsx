import * as React from 'react'
// @ts-ignore
import Script from 'react-load-script'
import Autocomplete = google.maps.places.Autocomplete;
import PlaceResult = google.maps.places.PlaceResult;

//import styles from './styles.module.css'

type PlaceSelected = (place?: PlaceResult) => any;

export interface Props extends React.HTMLProps<HTMLInputElement> {
  apikey: string,
  placeselected?: PlaceSelected
  clearbutton: HTMLElement
  className: string
}

export interface State {
  placeselected?: PlaceSelected
}

export class GoogleAddressAutocomplete extends React.Component<Props, State> {
  private ref = React.createRef<HTMLInputElement>()
  private autocomplete: Autocomplete;
  static defaultProps = {
    placeselected: (place: PlaceResult) => console.log("Default placeselected function", place),
    clearbutton: <button type='button'>Clear</button>,
    className: 'google-address-autocomplete'
  }

  constructor(props: Props) {
    super(props);
    this.handleScriptLoad = this.handleScriptLoad.bind(this);
    this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
    this.clearAddress = this.clearAddress.bind(this);
  }

  clearAddress() {
    let current: HTMLInputElement | null = this.ref.current;
    if (current != null) {
      current.value = '';
    }

    this.setState({placeselected: undefined})
    if (this.props.placeselected != undefined) {
      this.props.placeselected(undefined)
    }
  }

  handlePlaceSelect() {
    this.setState({placeselected: this.autocomplete.getPlace});
    if (this.props.placeselected != undefined) {
      this.props.placeselected(this.autocomplete.getPlace())
    }
  }

  handleScriptLoad() {
    const options = {};//{types: ['(cities)']};
    this.autocomplete = new google.maps.places.Autocomplete(
      this.ref.current as HTMLInputElement,
      options);
    this.autocomplete.setFields(['address_components',
      'formatted_address']);
    this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
  }

  render() {
    const component = this;
    let props = {...component.props};
    delete props['placeselected'];
    delete props['apikey'];
    let button = undefined;
    if (component.state != null && component.state.placeselected != undefined) {
      button = component.props.clearbutton;
    }
    return (
      <React.Fragment>
        <input type='text' {...props} ref={component.ref}/>&nbsp;
        <span onClick={() => component.clearAddress()}>{button}</span>
        <Script
          url={"https://maps.googleapis.com/maps/api/js?key=" + component.props.apikey + "&libraries=places"}
          onLoad={this.handleScriptLoad}
        />
      </React.Fragment>
    )
  }
}
