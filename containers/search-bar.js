import React, {Component} from 'react';

import {connect} from 'react-redux';

import {bindActionCreators} from 'redux';

import {searchCity} from '../actions/weather';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {term: ''};

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);


    }


    onInputChange(event) {

        this.setState({
            term: event.target.value
        })
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.searchCity(this.state.term);

        this.setState({ term: ''})
    }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.onFormSubmit} className="input-group">
                    <input
                        type="text"
                        placeholder="Get a five-day forecast in your favorite city"
                        onChange={ this.onInputChange }
                        className="form-control"
                    />
                    <span className="input-group-btn">
                            <button className="btn btn-default" type="submit">Search</button>
                </span>
                </form>
            </div>
        )
    }
}

function dispatchState(dispatch) {
    return bindActionCreators({
        searchCity: searchCity
    }, dispatch)

}
export default connect(null, dispatchState)(SearchBar)