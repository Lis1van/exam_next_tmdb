'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import MobNav from "@/components/MobNav";
import {FaUser } from 'react-icons/fa';
import DarkModeSwitch from "@/components/DarkModeSwitch";

const Navbar = () => {
    const [input, setInput] = useState('');
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setInput('');
        router.push(`/search/${input}?page=1`);
    };

    return (
        <div className='bg-primaryLight dark:bg-primary'>
            <div className="flex justify-between items-center py-4 px-2 md:px-10">
                <Link className='hidden md:block' href={'/discover/now_playing'}>
                    <h2 className='text-[30px]'>Movie TMDB</h2>
                </Link>

                <div className="flex items-center space-x-4 md:ml-auto">
                    <form className='space-x-4 hidden md:flex' onSubmit={handleSubmit}>
                        <input
                            className='rounded-md bg-secondaryLight dark:bg-secondary px-4 py-2 outline-none
                                       placeholder:text-textColorLight dark:placeholder:text-textColor'
                            type='text'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Search movie...'
                        />
                        <button className='rounded-md bg-secondaryLight dark:bg-secondary text-textColorLight
                                           dark:text-textColor py-2 px-4 hover:bg-blue-700 dark:hover:bg-textColor
                                           hover:text-black dark:hover:text-white'>
                            Search
                        </button>
                    </form>
                    <DarkModeSwitch />
                    <FaUser className="text-xl cursor-pointer" />
                </div>

                <MobNav input={input} setInput={setInput} handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Navbar;
