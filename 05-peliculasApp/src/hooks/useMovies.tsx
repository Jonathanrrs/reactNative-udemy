import { useState } from "react";
import { useEffect } from "react";
import movieDb from "../api/movieDB";
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface";


export const useMovies = () => {
    
    const [isLoading, setIsLoading] = useState(true);
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])

    const getMovies = async () => {
        const resp = await movieDb.get<MovieDBNowPlaying>('now_playing');
        setPeliculasEnCine(resp.data.results);
        setIsLoading(false);
        
    }

    useEffect(() => {
        getMovies();
    }, [])

    return {
        peliculasEnCine,
        isLoading
    }
}
