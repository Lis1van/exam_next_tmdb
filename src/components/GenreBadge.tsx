import React from 'react';
import { Badge } from 'reactstrap';
import {GenreBadgesProps} from "@/types";

const GenreBadges: React.FC<GenreBadgesProps> = ({ genres }) => {
    return (
        <div>
            {genres.map((genre) => (
                <Badge
                    key={genre.id}
                    color=" "
                    className="rounded-md mr-2 px-4 py-1 bg-green-400 dark:bg-white hover:bg-green-500 dark:hover:bg-[#b4b4b4] text-orange-900 dark:text-black"
                    style={{ cursor: 'pointer' }}
                    onClick={() => {
                        window.location.href = `/genres/${genre.id}?genre=${genre.name.toLowerCase()}`;
                    }}
                >
                    {genre.name}
                </Badge>
            ))}
        </div>
    );
};

export default GenreBadges;
