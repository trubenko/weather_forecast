import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google-map';


class WeatherList extends Component{

    renderWeather(cityData){
        const name = cityData.data.city.name;
        const temp = cityData.data.list.map((weather)=> weather.main.temp);
        const humidity = cityData.data.list.map((weather)=> weather.main.humidity);
        const pressure = cityData.data.list.map((weather)=> weather.main.pressure);
        const {lon , lat} = cityData.data.city.coord;

        return (
            <tr key={name}>
                {/*<td><GoogleMap lon={lon} lat={lat}/></td>*/}
                <td>{name}</td>
                <td>
                  <Chart data={temp} color='red' units="(K)" />
                </td>
                <td>
                    <Chart data={humidity} color='orange' units="(hPa)" />
                </td>
                <td>
                    <Chart data={pressure} color='grey' units="(%)" />
                </td>
            </tr>
        )
    }

    render(){

        return  (
          <div className="container">
              <table className="table table-hover">
                  <thead>
                  <tr>
                      <th>City</th>
                      <th>Temperature (K)</th>
                      <th>Pressure (hPa)</th>
                      <th>Humidity (%)</th>
                  </tr>
                  </thead>
                  <tbody>
                  { this.props.weather.map( this.renderWeather)}
                  </tbody>
              </table>
          </div>
        )
    }
}


function mapStateToProps({ weather}) {
    return { weather }
}
export default connect(mapStateToProps)(WeatherList)