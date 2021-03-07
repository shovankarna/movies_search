import React from 'react';

import MovieDBAPI from '../API/MovieDBAPI';
import List from './List';

class Anime extends React.Component {

    state = {
        searchterm: '',
        movies: [],
        isLoading: false,
        moviefound: true,
        serverproblem: false,
    }

    onInputChange = (event) => {
        this.setState({ searchterm: event.target.value })
    }

    onFormSubmit = async (event) => {
        this.setState({ isLoading: true })
        event.preventDefault();
        // console.log(this.state.searchterm)
        try {
            const response = await MovieDBAPI.get('/tv', {
                params: {
                    query: this.state.searchterm,
                }
            })
            console.log(response.data.results.length)
            if (response.data.results.length === 0) {
                this.setState({ moviefound: false })
            }
            else{
                this.setState({ moviefound: true })
            }
            this.setState({ movies: response.data.results })
            this.setState({ isLoading: false })
            this.setState({ serverproblem: false })
        }
        catch (error) {
            console.log('failed with ' + error)
            if (error) {
                this.setState({ serverproblem: true })
            }

        }

    }
    render() {
        if (this.state.serverproblem === true) {
            return (
                <div id='serverproblem'>Server problem</div>
            )
        }
        else if (this.state.moviefound === false) {
            return (
                <div className='home-body'>
                    <div className='searchbar-container'>
                        <form className='searchbar' onSubmit={this.onFormSubmit}>
                            <input placeholder='Search Anime' onChange={this.onInputChange} value={this.state.searchterm} />
                        </form>
                    </div>
                    <div id='notfound'>Anime Not Found</div>
                </div>
            )
        }
        else if (this.state.movies.length === 0) {
            return (
                <div className='home-body'>
                    <div className='searchbar-container'>
                        <form className='searchbar' onSubmit={this.onFormSubmit}>
                            <input placeholder='Search Anime' onChange={this.onInputChange} value={this.state.searchterm} />
                        </form>
                    </div>
                    <div id='searchfor'>Search For Anime!</div>
                </div>

            )
        }
        else if (this.state.isLoading === true) {
            return (
                <div className='home-body'>
                    <div className='searchbar-container'>
                        <form className='searchbar' onSubmit={this.onFormSubmit}>
                            <input placeholder='Search Anime' onChange={this.onInputChange} value={this.state.searchterm} />
                        </form>
                    </div>
                    <div className="ui active inverted medium text loader">Loading...</div>
                </div>

            )
        }

        return (
            <div className='home-body'>
                <div className='searchbar-container'>
                    <form className='searchbar' onSubmit={this.onFormSubmit}>
                        <input placeholder='Search Movies' onChange={this.onInputChange} value={this.state.searchterm} />
                    </form>
                </div>
                <div className='movies-body'>
                    <List movielist={this.state.movies} type={this.state.type}/>
                </div>
            </div>

        )
    }
}

export default Anime;


// <div class="ui active inverted medium text loader">Loading...</div>