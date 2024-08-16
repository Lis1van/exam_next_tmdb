import React, {Dispatch, SetStateAction} from "react";

export interface Root {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: BelongsToCollection,
    budget: number,
    genres: Genre[],
    homepage: string,
    id: number,
    imdb_id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: string,
    poster_path: string,
    production_companies: ProductionCompany[],
    production_countries: ProductionCountry[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_language: SpokenLanguage[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
    videos: Videos,
}
export interface BelongsToCollection {
    id: number,
    name: string,
    poster_path: string,
    backdrop_path: string,
}
export interface Genre {
    id: number,
    name: string,
}
export interface ProductionCompany {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string,
}
export interface ProductionCountry{
    iso_3166_1: string,
    name: string,
}
export interface SpokenLanguage {
    english_name: string,
    iso_639_1: string,
    name: string,
}
export interface Videos {
    results: Result[]
}
export interface Result {
    iso_3166_1: string,
    iso_639_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string,
}
export interface propsType {
    input: string,
    setInput: Dispatch<SetStateAction<string>>,
    handleSubmit: (event: React.FormEvent) => void,
}

export interface IGenre {
    id: number,
    name: string,
}
export interface IMovie{
    id: string;
    title: string;
    poster_path: string;
    release_date: string;
}
export interface IMovie{
    id: string;
    title: string;
    poster_path: string;
    release_date: string;
}
export interface propsTypeCard {
    title: string;
    img: string;
    id: string;
    releasedDate: string;
}
export interface GenreBadgesProps {
    genres: { id: number; name: string }[];
}
export interface IGenres {
    index: number,
    name: string,
    length: number,
    id: number,
}
export interface RatingStarsProps {
    rating: number;
    starDimension?: string;
    starSpacing?: string;
}
