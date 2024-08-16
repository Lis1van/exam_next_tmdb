import React from 'react';
import {CiImageOff} from "react-icons/ci";

const CardSkeleton = ({error}: {error?: boolean}) => {
    return (
        <div className={`h-[450px] md:h-[335px] w-[100%] grid place-items-center bg-primaryLight dark:bg-primary ${!error && 'cardSkeleton'}`}>
                       {/*иконка*/}
            {error && <CiImageOff size={56} /> }
        </div>
    );
};

export default CardSkeleton;
