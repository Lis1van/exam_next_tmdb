'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import { BASE_URL } from "@/utils/Const";
import Loading from "@/components/Loading";
import MoviesGrid from "@/components/MoviesGrid";
import Pagination from "@/components/Pagination";
import Footer from "@/components/Footer";
import { IMovie } from "@/types";

const Discover = () => {
    const [title, setTitle] = useState('')
    const [movies, setMovies] = useState<IMovie[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(1)
    const [discover, setDiscover] = useState('')

    const mainRef = useRef<HTMLDivElement>(null);

    const router = useRouter();
    const params = useParams();
    const searchParams = useSearchParams();

    const fetchMovies = (id: string, page: string | null) => {
        axios.get(`${BASE_URL}/movie/${id}`, {
            params: {
                api_key: process.env.NEXT_PUBLIC_TMDB_API_KEY,
                page
            }
        }).then((response) => {
            setMovies(response.data.results);
            setCurrentPage(response.data.page);
            setTotalPage(response.data.total_pages);
        }).catch(error => console.log(error));
    }

    useEffect(() => {
        const id = params.id.toString();
        const page = searchParams.get('page');

        setDiscover(id);

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
                break;
        }

        fetchMovies(id, page);

    }, [params.id, searchParams.get('page')]);

    const handlePageChange = (button: string) => {
        const page = button === 'prev' ? currentPage - 1 : currentPage + 1;
        router.push(`/discover/${discover}?page=${page}`);
    }

    return (
        <main className='bg-secondaryLight dark:bg-secondary max-h-[calc(100vh - 77px)] min-h-[calc(100vh - 77px)]
        p-8 pb-20 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-500
        dark:scrollbar-thumb-[#22222a] scrollbar-track-primaryLight dark:scrollbar-track-primary relative' ref={mainRef}>
            <h2 className='text-[24px] tracking-[2px]'>{title}</h2>
            {movies.length === 0 && <Loading />}
            <MoviesGrid movies={movies} />
            <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={handlePageChange} />
            <div className='pb-20'>
                <Footer />
            </div>
        </main>
    );
};

export default Discover;
