import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import {auth} from 'config.js';

class App extends React.Component {

    onSearchSubmit(term) {
        // axios fetch
        let rootURL = 'https://api.unsplash.com';
        axios.get(`${rootURL}/search/photos`, {
            // create params to specify query strings
            params: {
                query: term
            },
            // create headers for making requests
            headers: {
                // auth
                Authorization: `Client-ID ${auth.unsplashID}`   
            }
            // 
        })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;