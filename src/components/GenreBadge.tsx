import React from 'react';
import { Badge } from 'reactstrap';
import {GenreBadgesProps} from "@/types";

const GenreBadges: React.FC<GenreBadgesProps> = ({ genres }) => {
    return (
        <div>
            {genres.map((genre) => (
                <Badge
                    key={genre.id}
                    color="primary"
                    className="mr-2 px-4 py-1 bg-white hover:bg-[#b4b4b4] text-black"
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
