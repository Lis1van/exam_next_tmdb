'use client'

import React, {useEffect, useRef, useState} from 'react';
import {useParams, useRouter, useSearchParams} from "next/navigation";
import axios from "axios";
import {BASE_URL} from "@/utils/Const";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import Loading from "@/components/Loading";
import Card from "@/components/Card";

export interface IMovie{
    id: string;
    title: string;
    poster_path: string;
    release_date: string;
}

const Discover = () => {
    const [title, setTitle] = useState('')
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [discover, setDiscover] = useState('')

    const mainRef = useRef<HTMLDivElement>(null);

    const router = useRouter();
    const params = useParams()
    const searchParams = useSearchParams()

    useEffect(() => {
        mainRef?.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
        const id = params.id.toString();
        const page = searchParams.get('page');

        setDiscover(id)

        switch (id) {
            case 'now_playing':
                setTitle('Now Playing movies');
                break;
            case 'top_rated':
                setTitle('Top rated movies');
                break;
            case 'popular':
                setTitle('Popular movies');
                break;
            case 'upcoming':
                setTitle('Upcoming movies');
                break;
            default:
                setTitle('');
                break
        }
        axios.get(`${BASE_URL}/movie/${id}`, {
            params: {
                // В Next.js переменные окружения, которые должны быть доступны на клиенте,
                // должны начинаться с префикса NEXT_PUBLIC_.
                // Например, если ваш API ключ должен использоваться на клиенте,
                // он должен быть назван как NEXT_PUBLIC_TMDB_API_KEY.
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                page
            }
        }).then((response) => {
            console.log('res:', response.data);
            setMovies(response.data.results)
            setCurrentPage(response.data.page)
            setTotalPage(response.data.total_pages)
        }).catch(error => console.log(error))

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params.id, searchParams.get('page')]);

    const handlePageChange = (button: string) => {
        let page = ''
        if (button === 'prev'){
            page = `page=${currentPage - 1}`
        }else {
            page = `page=${currentPage + 1}`
        }
        router.push(`/discover/${discover}/${page}`)
    }

    return (
        <main className='bg-secondary max-h-[calc(100vh - 77px)] min-h-[calc(100vh - 77px)] p-8 overflow-y-scroll
        overflow-x-hidden scrollbar-thin scrollbar-thumb-[#22222a] scrollbar-track-primary relative' ref={mainRef}>
            <h2 className='text-[24px] tracking-[2px]'>{title}</h2>
            {movies.length === 0 && <Loading/>}
            <div className='grid gap-8 moviesGrid place-items-center mt-8'>
                {movies.map((movie: IMovie) => (
                    <Card key={movie.id}
                          img={movie.poster_path}
                          title={movie.title}
                          id={movie.id}
                          releasedDate={movie.release_date} />)
                )}
            </div>
        </main>
    );
};

export default Discover;
