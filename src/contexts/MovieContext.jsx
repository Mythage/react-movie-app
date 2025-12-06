import {createContext, useState, useContext, useEffect} from 'react';

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

/* This function provides the favorites state to the app */
export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        const storedFavs = localStorage.getItem('favorites')

        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, [])

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites)) // save to local storage
    }, [favorites])
    const addToFavorites = (movie) => { // add movie to favorites
        setFavorites(prev => [...prev, movie]) // spread operator
    }

    const removeFromFavorites = (movieId) => { // remove movie from favorites
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => { // check if movie is favorite
        return favorites.some(movie => movie.id === movieId)
    }

    const value = { // return the favorites state
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContext.Provider value={value}>{children}
    </MovieContext.Provider>
}