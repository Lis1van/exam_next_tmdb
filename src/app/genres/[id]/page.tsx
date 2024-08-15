'use client'

import React, {useEffect, useRef, useState} from 'react';
import {useParams, useRouter, useSearchParams} from "next/navigation";
import axios from "axios";
import {BASE_URL} from "@/utils/Const";
import Loading from "@/components/Loading";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import {IMovie} from "@/app/discover/[id]/page";

const Genres = () => {
    const [title, setTitle] = useState('')
    const [movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)

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
        const genre = searchParams.get('genre');
        const page = searchParams.get('page');

        setTitle(`${genre} Movies`)

        axios.get(`${BASE_URL}/discover/movie`, {
            params: {
                // В Next.js переменные окружения, которые должны быть доступны на клиенте,
                // должны начинаться с префикса NEXT_PUBLIC_.
                // Например, если ваш API ключ должен использоваться на клиенте,
                // он должен быть назван как NEXT_PUBLIC_TMDB_API_KEY.
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                with_genres: id,
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
        let page;
        if (button === 'prev'){
            page = `page=${currentPage - 1}`
        }else {
            page = `page=${currentPage + 1}`
        }
        router.push(`/genres/${params.id}?genre=${searchParams.get('genre')}&${page}`)
    }

    return (
        <main className='bg-secondary max-h-[calc(100vh - 77px)] min-h-[calc(100vh - 77px)] p-8 pb-20 overflow-y-scroll
        overflow-x-hidden scrollbar-thin scrollbar-thumb-[#22222a] scrollbar-track-primary relative' ref={mainRef}>
            <h2 className='text-[24px] tracking-[2px] capitalize'>{title}</h2>
            {movies.length === 0 && <Loading/>}
            <div className='grid gap-8 moviesGrid place-items-center mt-8'>
                {movies.map((movie: IMovie) => (
                    <Card
                        key={movie.id}
                        img={movie.poster_path}
                        title={movie.title}
                        id={movie.id}
                        releasedDate={movie.release_date}
                    />)
                )}
            </div>
            <div className='flex justify-center gap-16 py-6 pt-16'>
                <button onClick={() => handlePageChange('prev')}
                        className={`bg-purple-900 p-2 px-8 hover:bg-purple-950 
                        ${currentPage === 1 && 'hidden'}`}
                >
                    Prev
                </button>
                <button onClick={() => handlePageChange('next')}
                        className={`bg-purple-900 p-2 px-8 hover:bg-purple-950 
                        ${currentPage === totalPage && 'hidden'}`}
                >
                    Next
                </button>
            </div>
            <div className='pb-20'>
                <Footer/>
            </div>
        </main>
    );
};

export default Genres;
