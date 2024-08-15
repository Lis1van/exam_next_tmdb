'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import MobNav from "@/components/MobNav";
import { FaSun, FaMoon, FaUser } from 'react-icons/fa';
import { useTheme } from 'next-themes';

const Navbar = () => {
    const [input, setInput] = useState('');
    const router = useRouter();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Убедимся, что компонент монтирован на клиенте
    useEffect(() => setMounted(true), []);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        setInput('');
        router.push(`/search/${input}?page=1`);
    };

    if (!mounted) return null;

    return (
        <div className='bg-primary'>
            <div className="flex justify-between items-center py-4 px-2 md:px-10">
                <Link className='hidden md:block' href={'/discover/now_playing'}>
                    <h2 className='text-[30px]'>Movie TMDB</h2>
                </Link>

                {/* Обновляем элементы управления в десктопной версии */}
                <div className="flex items-center space-x-4 md:ml-auto">
                    <form className='space-x-4 hidden md:flex' onSubmit={handleSubmit}>
                        <input
                            className='bg-secondary px-4 py-2 outline-none placeholder:text-textColor'
                            type='text'
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='Search movie...'
                        />
                        <button className='bg-secondary text-textColor py-2 px-4 hover:bg-textColor hover:text-white'>
                            Search
                        </button>
                    </form>

                    <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="text-xl focus:outline-none"
                        aria-label="Toggle Theme"
                        type="button"
                    >
                        {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon />}
                    </button>
                    <FaUser className="text-xl cursor-pointer" />
                </div>

                {/* Мобильная навигация */}
                <MobNav input={input} setInput={setInput} handleSubmit={handleSubmit} />
            </div>
        </div>
    );
};

export default Navbar;
