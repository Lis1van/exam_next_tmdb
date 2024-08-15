import React from 'react';
import { Badge } from 'reactstrap';

interface GenreBadgesProps {
    genres: { id: number; name: string }[];
}

const GenreBadges: React.FC<GenreBadgesProps> = ({ genres }) => {
    return (
        <div>
            {genres.map((genre) => (
                <Badge
                    key={genre.id}
                    color="primary"
                    className="mr-2"
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
