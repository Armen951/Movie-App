import React, { useState } from 'react';
import {LoadingComponent} from "../components/LoadingComponent";
import NoResultsComponent from "../components/NoResultsComponent";
import ItemsComponent from "../components/ItemsComponent";
import FiltersComponent from "../components/FiltersComponent";
import MoviesService from "../services/movies-service";
import ErrorComponent from "../components/ErrorComponent";

const MoviePage = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleSearch = async (title , type , year) => {
        setLoading(true);
        try {
            const response = await MoviesService.getMovies({title,type,year});
            if(response.data?.Search){
                setMovies(response.data.Search);
                setMovie({});
            }
            else if(response.data?.Response) {
                setMovie(response.data);
                setMovies([]);
            } else {
                setMovie({});
                setMovies([]);
            }

        } catch (error) {
            setError(true);
            setTimeout(()=> {
                setError(false)
            },5000)
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
          <FiltersComponent handleSearch={handleSearch} />
            {loading ? (
               <LoadingComponent />
            ) : (
                <>
                <ItemsComponent movies={movies} movie={movie} />
            {
                movies.length===0 && !movie.Title && <NoResultsComponent />
            }
                    {
                        error && <ErrorComponent />
                    }
                </>
            )}
        </div>
    );
};

export default MoviePage;
