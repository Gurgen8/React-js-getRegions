import React, { Component } from 'react';
import COUNTRIES from './data/countries.json';
import REGIONS from './data/regions.json';
import CITIES from './data/cities.json';
import Select from 'react-select';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countryId: '',
      regionId: '',
    }
  }

  handleCountryChange = (ev) => {
    this.setState({ countryId: ev.target.value, regionId: '',})
  }
  handleRegionChange = (ev) => {
    this.setState({ regionId: ev.target.value })
    
  }

  render() {
    const { countryId, regionId } = this.state;
    const countryCode = COUNTRIES[2].data.find(item => item.id === countryId)?.code;
    return (
      <div  >
        <select name="" id="" onChange={this. handleCountryChange}>
          <option>Select...</option>
          {COUNTRIES[2].data.map(d => (
            <option key={d.id} value={d.id}>{d.name}</option>
          ))}
        </select>
        {countryId ? (
          <select name="" id="" onChange={this.handleRegionChange}>
            <option>Select...</option>
            {REGIONS[2].data.filter(reg => reg.country_id === countryId).map(d => (
              <option key={d.id} value={d.id}>{d.name}</option>
            ))}
          </select>
        ) : null}
        <div>
          {countryCode ? (
            <img src={`img/${countryCode.toUpperCase()}.png`} alt={countryCode.name}/>
          ) : null}
        </div>
        {regionId ? (
          <ul>
            {CITIES[2].data.filter(item => item.region_id === regionId).map(d => (
              <li key={d.id}>{d.name}</li>
            ))}
          </ul>
        ) : null}
      </div>
    );
  }
}

export default App;
