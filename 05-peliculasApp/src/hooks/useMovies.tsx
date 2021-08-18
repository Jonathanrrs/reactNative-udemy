import { useState } from "react";
import { useEffect } from "react";
import movieDb from "../api/movieDB";
import { Movie, MovieDBNResponse } from "../interfaces/movieInterface";


export const useMovies = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])
    const [peliculasPopulares, setPeliculasPopulares] = useState<Movie[]>([])

    const getMovies = async () => {
        const respNowPlaying = await movieDb.get<MovieDBNResponse>('/now_playing');
        const respPopular = await movieDb.get<MovieDBNResponse>('/popular');

        await movieDb.get<MovieDBNResponse>('/top_rated');
        await movieDb.get<MovieDBNResponse>('/upcoming');

        setPeliculasEnCine(respNowPlaying.data.results);
        setPeliculasPopulares(respPopular.data.results);
        setIsLoading(false);
        
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        peliculasEnCine,
        peliculasPopulares,
        isLoading
    }
}
