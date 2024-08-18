import React from 'react';
import StarRatings from 'react-star-ratings';
import {RatingStarsProps} from "@/types";

const StarRating: React.FC<RatingStarsProps> = ({
                                                     rating,
                                                     starDimension = "20px",
                                                     starSpacing = "2px"
                                                 }) => {
    return (
        <StarRatings
            rating={rating / 2}  // API TMDB возвращает рейтинг из 10, делим на 2, чтобы получить рейтинг по 5-звездочной шкале
            starRatedColor="gold"
            numberOfStars={5}
            starDimension={starDimension}
            starSpacing={starSpacing}
            name='rating'
        />
    );
};

export default StarRating;
