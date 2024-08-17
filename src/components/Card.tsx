import React, {useState} from 'react';
import Link from "next/link";
import {BASE_IMG_URL} from "@/utils/Const";
import CardSkeleton from "@/components/CardSkeleton";
import {propsTypeCard} from "@/types";

const Card = ({img, id, title, releasedDate}: propsTypeCard) => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)

    return (
        <div className='group bg-primaryLight dark:bg-primary h-[450px] md:h-[335px] w-[100%]'>
            {!loaded && !error && <CardSkeleton />}
            {error && <CardSkeleton error />}

            <Link className={`${!loaded && error && 'hidden'}`} href={`/details/${id}`}>
                <div className='relative'>
                    <img
                        className='object-cover h-[450px] md:h-[335px] w-[100%]'
                        src={`${BASE_IMG_URL}${img}`}
                        alt="Movie poster"
                        onLoad={() => setLoaded(true)}
                        onError={() => setError(true)}
                    />
                    <div className='absolute bg-gray-500 dark:bg-primary w-[100%] bottom-0 px-4 py-2 text-center transition-all
                    duration-500 opacity-0 group-hover:opacity-100'>
                        {title}
                        <p>{releasedDate}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
