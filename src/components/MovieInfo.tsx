import React from 'react';
import Link from "next/link";

interface IGenres {
    index: number,
    name: string,
    length: number,
    id: number,
}

const MovieInfo = ({index, name, length, id}: IGenres) => {
    return (
        <Link href={`/genres/${id}?genre=${name.toLowerCase()}`}>
            <div className='flex gap-4 text-textColor hover:text-white'>
                <div>{name}</div>
                <div className='text-textColor'>{index + 1 !== length ? '/' : ''}</div>
            </div>
        </Link>
    );
};

export default MovieInfo;
