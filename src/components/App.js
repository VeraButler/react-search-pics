import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    state ={ images: [] }

onSearchSubmit = async term => {
    // axios fetch
    const response = await unsplash.get(`/search/photos`, {
    // create params to specify query strings
        params: { query: term }
    });
    
    // update state with repsonse
    this.setState({ images: response.data.results });
    };

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;