import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import SearchBar from '../containers/search-bar';
import WeatherList from '../containers/weather-list';

import {Provider} from 'react-redux';

import ReduxPromise from 'redux-promise';
import {createStore, applyMiddleware} from 'redux';
import reducers from '../reducers/index';


const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);


class App extends Component {


    render() {

        return (
            <Provider store={createStoreWithMiddleware(reducers)}>
                <div>
                    <SearchBar />
                    <WeatherList/>
                </div>
            </Provider>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

