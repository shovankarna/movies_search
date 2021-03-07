import React from 'react'

const DetailBlock = ({ movie, type }) => {
    console.log(movie)
    return (
        <div className='detailblock'>
            <div id='poster'>
                <img id='posterimage' alt={movie.original_title} src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
            </div>
            <div className='content'>
                <h2><div id='title'>{type === 'movie' ? movie.original_title: movie.name}</div></h2>
                <div id='rating'>Rating: {movie.vote_average} / 10</div>
                <div id='releasedate'>Release Date: {type === 'movie' ? movie.release_date: movie.first_air_date}</div>
                <div id='lang'>Lang: {movie.original_language}</div>
                <div id='overview'><h4>Overview:</h4> {movie.overview}</div>
                <a id='knowmore' target='_blank' rel="noreferrer" href={`https://www.themoviedb.org/movie/${movie.id}`} >Explore More!</a>
            </div>
        </div>
    )
};

export default DetailBlock;

// https://www.themoviedb.org/movie/