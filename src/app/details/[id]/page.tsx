'use client'
import React, { useEffect, useRef, useState } from 'react';
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { BASE_IMG_URL } from "@/utils/Const";
import dynamic from "next/dynamic";
import Loading from "@/components/Loading";
import { IoMdClose } from "react-icons/io";
import { BsPlayFill } from "react-icons/bs";
import Footer from "@/components/Footer";
import RatingStars from "@/components/StarRating";
import GenreBadges from "@/components/GenreBadge";
import {Root} from "@/types";

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

const MovieDetails = () => {
    const [movie, setMovie] = useState<Root>();
    const [showPlayer, setShowPlayer] = useState(false);
    const [trailer, setTrailer] = useState('');

    const router = useRouter();
    const params = useParams();

    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&append_to_response=videos`)
            .then((res) => {
                setMovie(res.data);
            });
    }, [params.id]);

    useEffect(() => {
        if (movie?.videos) {
            const trailerIndex = movie.videos.results.findIndex((element) => element.type === 'Trailer');
            const trailerURL = `https://www.youtube.com/watch?v=${movie?.videos.results[trailerIndex]?.key}`;
            setTrailer(trailerURL);
        }
    }, [movie]);

    const startPlayer = () => {
        mainRef?.current?.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
        setShowPlayer(true);
    };

    return (
        <main className='bg-secondaryLight dark:bg-secondary p-8 relative max-h-[calc(100vh - 77px)] min-h-[calc(100vh - 77px)]
        overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-500 dark:scrollbar-thumb-[#22222a] scrollbar-track-primaryLight
         dark:scrollbar-track-primary' ref={mainRef}
        >
            {movie === null && <Loading />}
            <div className='text-red-400 dark:text-textColor hover:text-red-600 dark:hover:text-white absolute right-0 top-0 m-2 cursor-pointer'
                 onClick={router.back}>
                <IoMdClose size={28} />
            </div>
            <div className='flex justify-center items-center pt-4 md:pt-0'>
                <div className='grid md:grid-cols-[300px,1fr] max-w-[1200px] gap-12'>
                    <div>
                        <img src={`${BASE_IMG_URL}${movie?.poster_path}`} alt={movie?.title} />
                    </div>
                    <div className='space-y-6 md:space-y-3 text-textColorLight dark:text-textColor'>
                        <div className='uppercase text-[26px] md:text-[34px] font-medium pr-4 text-purple-950 dark:text-white'>
                            {movie?.title}
                        </div>
                        {/* Интеграция значков жанров */}
                        <GenreBadges genres={movie?.genres || []} />
                        <div className='flex flex-col md:flex-row gap-2 md:gap-6'>
                            <div>Language: {movie?.original_language?.toUpperCase()}</div>
                            <div>Release: {movie?.release_date}</div>
                            <div>Runtime: {movie?.runtime} min.</div>
                            {/* Интеграция звездного рейтинга */}
                            <div>
                                Rating: <RatingStars rating={movie?.vote_average || 0} />
                            </div>
                        </div>
                        <div className='pt-14 space-y-2 pr-4'>
                            <div>OVERVIEW:</div>
                            <div>{movie?.overview}</div>
                        </div>
                        <div className='inline-block pt-6 cursor-pointer' onClick={startPlayer}>
                            <div className='rounded-md flex gap-2 items-center bg-red-500 dark:bg-white text-black
                            dark:text-black px-4 py-2 mb-6 hover:bg-red-600 dark:hover:bg-[#b4b4b4]'>
                                <BsPlayFill size={24} />
                                Watch trailer
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*react player*/}
            <div className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition 
        duration-1000 ${showPlayer ? 'opacity-100 z-50' : 'opacity-0 z-10'}`}
                 style={{ visibility: showPlayer ? 'visible' : 'hidden', pointerEvents: showPlayer ? 'auto' : 'none' }}
            >
                <div className='flex items-center justify-between bg-black text-[#f9f9f9] p-3.5'>
                    <span className='font-semibold'>Playing trailer</span>
                    <div className='cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50
                    hover:opacity-75 hover:bg-[#0f0f0f]' onClick={() => setShowPlayer(false)}
                    >
                        <IoMdClose className='h-5'/>
                    </div>
                </div>
                <div className='relative pt-[56.25%]'>
                    <ReactPlayer
                        url={trailer}
                        width='100%'
                        height='100%'
                        style={{ position: 'absolute', top: 0, left: 0 }}
                        controls={true}
                        playing={showPlayer}
                    />
                </div>
            </div>
            <div className='pb-20'>
                <Footer />
            </div>
        </main>
    );
};

export default MovieDetails;
