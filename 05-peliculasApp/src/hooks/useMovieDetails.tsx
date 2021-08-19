import { useEffect } from "react";
import { useState } from "react"
import movieDB from "../api/movieDB";
import { MovieFull } from "../interfaces/movieInterface";

interface MovieDetails {
    isLoading:  boolean;

    cast: any[];
}

export const useMovieDetails = (movieId: number) => {
    const [state, setstate] = useState<MovieDetails>();

    const getMovieDetail = async() => {
        const resp = await movieDB.get<MovieFull>(`/${movieId}`);
        console.log(resp.data.overview);
        
    }

    useEffect(() => {
        getMovieDetail();
    }, []);

    return {
        state
    }
}
