'use client'

import React, {useState} from 'react';
import {useRouter} from "next/navigation";
import Link from "next/link";
import MobNav from "@/components/MobNav";

const Navbar = () => {

    const [input, setInput] = useState('');
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setInput('')
        router.push(`/search/${input}?page=1`)
    }

    return (
        <div className='bg-primary'>
            <div className="flex justify-between items-center py-4 px-2 md:px-10">
                <Link className='hidden md:block' href='/discover/now_playing'>
                    <h2 className='text-[30px]'>Movie TMDB</h2>
                </Link>
                {/*Вынести поиск в отдельный компонент*/}
                <form className='space-x-4 hidden md:block' onSubmit={handleSubmit}>
                    <input className='bg-secondary px-4 py-2 outline-none placeholder:text-textColor' type='text'
                           value={input} onChange={(e) => setInput(e.target.value)}
                           placeholder='Поиск фильмов...'/>
                <button className='bg-secondary text-textColor py-2 px-4 hover:bg-textColor hover:text-white'>Поиск</button>
                </form>
                {/*--------------------------*/}

                <MobNav input={input} setInput={setInput} handleSubmit={handleSubmit} />

            </div>


        </div>
    );
};

export default Navbar;
