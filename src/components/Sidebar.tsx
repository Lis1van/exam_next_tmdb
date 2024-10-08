'use client'

import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "next/navigation";
import Link from "next/link";
import axios from "axios";
import {BASE_URL} from "@/utils/Const";
import {IGenre} from "@/types";

const Sidebar = () => {
    const [genres, setGenres] = useState([])
    const [selectedGenre, setSelectedGenre] = useState('')

    const searchParams = useSearchParams()
    const params = useParams()

    useEffect(() => {
        axios.get(`${BASE_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`)
            .then(({data}) => {
                console.log('sidebar:', data.genres);
                setGenres(data.genres);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        if(searchParams.get('genre')){
            setSelectedGenre(searchParams.get('genre')!)
            return
        }
        setSelectedGenre(params.id.toString())
    }, [params.id]);

    return (
        <div className='bg-primaryLight dark:bg-primary px-10 h-full max-h-[calc(100vh - 77px)] pb-20 overflow-y-auto
                        scrollbar-thin scrollbar-thumb-gray-500 dark:scrollbar-thumb-[#22222a] scrollbar-track-primaryLight
                        dark:scrollbar-track-primary hidden sm:block'>
            <div className="flex flex-col gap-4 pt-4">
                <p className='sidebarTitle'>Discover</p>
                <Link href={'/discover/now_playing'}>
                    <p className={`sidebarLink ${selectedGenre === 'now_playing' ? 'sidebarActive' : ''}`}>
                        Now playing
                    </p>
                </Link>
                <Link href={'/discover/top_rated'}>
                    <p className={`sidebarLink ${selectedGenre === 'top_rated' ? 'sidebarActive' : ''}`}>
                        Top rated
                    </p>
                </Link>
                <Link href={'/discover/popular'}>
                    <p className={`sidebarLink ${selectedGenre === 'popular' ? 'sidebarActive' : ''}`}>
                        Popular
                    </p>
                </Link>
                <Link href={'/discover/upcoming'}>
                    <p className={`sidebarLink ${selectedGenre === 'upcoming' ? 'sidebarActive' : ''}`}>
                        Upcoming
                    </p>
                </Link>
            </div>
            <div className="flex flex-col gap-4 pt-4">
                <p className='sidebarTitle'>Genre</p>
                {genres.map((genre: IGenre) => <Link key={genre.id}
                                                     href={`/genres/${genre.id}?genre=${genre.name.toLowerCase()}`}
                                                     className='w-fit'>
                    <p className={`sidebarLink ${genre.name.toLowerCase() === selectedGenre ? 'sidebarActive' : ''}`}>
                        {genre.name}
                    </p>
                </Link>)}
            </div>
        </div>
    );
};

export default Sidebar;
