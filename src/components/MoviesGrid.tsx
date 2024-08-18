import React from 'react';
import Card from '@/components/Card';
import { IMovie } from '@/types';

interface MoviesGridProps {
    movies: IMovie[];
}

const MoviesGrid: React.FC<MoviesGridProps> = ({ movies }) => {
    return (
        <div className='grid gap-8 moviesGrid place-items-center mt-8'>
            {movies.map((movie: IMovie) => (
                <Card
                    key={movie.id}
                    img={movie.poster_path}
                    title={movie.title}
                    id={movie.id}
                    releasedDate={movie.release_date}
                    rating={movie.vote_average}
                />
            ))}
        </div>
    );
};

export default MoviesGrid;
