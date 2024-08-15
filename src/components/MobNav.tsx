import React, {Dispatch, SetStateAction, useEffect, useState} from 'react';
import {useParams, useSearchParams} from "next/navigation";
import {AiOutlineMenu} from "react-icons/ai";
import {IoMdClose} from "react-icons/io";
import Link from "next/link";
import {BASE_URL} from "@/utils/Const";
import axios from "axios";

// Вынести интерфейс в файл со всеми типами ????????
interface propsType{
    input: string,
    setInput: Dispatch<SetStateAction<string>>,
    handleSubmit: (event: React.FormEvent) => void,
}
interface IGenre{
    id: number,
    name: string,
}
//------------------------------

const MobNav = ({input, setInput, handleSubmit}: propsType) => {
    const [isOpen, setIsOpen] = useState(false)
    const [genres, setGenres] = useState([])
    const [selectedGenre, setSelectedGenre] = useState('')

    const searchParams = useSearchParams()
    const params = useParams()

    useEffect(() => {
        axios.get(`${BASE_URL}/genre/movie/list?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=en-US`, {})
            .then(({data}) => {
                console.log(data.genres)
                setGenres(data.genres)
            })
            .catch((err) => console.log(err))
    }, [])

    useEffect(() => {
        if(searchParams.get('genre')){
            setSelectedGenre(searchParams.get('genre')!)
            return
        }
        setSelectedGenre(params.id.toString())
    }, [searchParams.get('genre'), params.id]);

    return (
        <>
            <form className='md:hidden flex justify-between w-[100%]' onSubmit={handleSubmit}>
                <div onClick={() => setIsOpen(true)}>
                    {/*react-icon иконка меню в мобильной версии*/}
                    <AiOutlineMenu size={30}/>
                </div>
                <div className='space-x-4'>
                    <input className='bg-secondary px-4 py-2 outline-none placeholder:text-color text-[14px] w-[180px]'
                           type='text' value={input}
                           onChange={(e) => setInput(e.target.value)}
                           placeholder='Search movie...'/>
                </div>
                <button className='bg-secondary text-textColor py-2 px-4 hover:bg-textColor hover:text-white text-[14px]'>
                    Search
                </button>
            </form>

            {/*Full screen Nav*/}
            <div className={`min-h-[100vh] max-h-[100vh] w-[100%] bg-primary fixed left-0 top-0 z-10
            overflow-scroll ${isOpen ? 'block' : 'hidden'}`}>
                <div className='sticky top-0 bg-primary py-4 w-[100%]'>
                    <IoMdClose className='absolute top-0 right-0 m-2 mt-7'
                               onClick={() => setIsOpen(false)} size={28} />
                <Link className='w-fit' href={'/discover/now_playing'} onClick={() => setIsOpen(false)}>
                    <div className='sidebarTitle text-[28px] text-center'>
                        Movie TMDB
                    </div>
                </Link>
                </div>
                <div className='px-4 pb-16'>
                    <div className="flex flex-col gap-4 pt-4">
                        <p className='sidebarTitle'>Discover</p>
                        <Link className='w-fit' href={'/discover/now_playing'} onClick={() => setIsOpen(false)}>
                            <p className={`sidebarLink ${selectedGenre === 'now_playing' ? 'sidebarActive' : ''}`}>
                                Now playing
                            </p>
                        </Link>
                        <Link className='w-fit' href={'/discover/top_rated'} onClick={() => setIsOpen(false)}>
                            <p className={`sidebarLink ${selectedGenre === 'top_rated' ? 'sidebarActive' : ''}`}>
                                Top rated
                            </p>
                        </Link>
                        <Link className='w-fit' href={'/discover/popular'} onClick={() => setIsOpen(false)}>
                            <p className={`sidebarLink ${selectedGenre === 'popular' ? 'sidebarActive' : ''}`}>
                                Popular
                            </p>
                        </Link>
                        <Link className='w-fit' href={'/discover/upcoming'} onClick={() => setIsOpen(false)}>
                            <p className={`sidebarLink ${selectedGenre === 'upcoming' ? 'sidebarActive' : ''}`}>
                                Upcoming
                            </p>
                        </Link>
                    </div>
                    <div className="flex flex-col gap-4 pt-4">
                        <p className='sidebarTitle'>Genre</p>
                        {genres.map((genre: IGenre) => <Link key={genre.id} href={`/genres/${genre.id}?genre=${genre.name.
                        toLocaleLowerCase()}`} className='w-fit' onClick={() => setIsOpen(false)}>
                            <p className={`sidebarLink ${genre.name.
                            toLowerCase() === selectedGenre ? 'sidebarActive' : ''}`}>
                                {genre.name}
                            </p>
                        </Link>)}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobNav;
