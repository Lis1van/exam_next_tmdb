// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjY2NDZmZGQ2YzEzYTIxYjY3YTVkNzdkNTUwZjU0YiIsIm5iZiI6MTcyMzQ1NjI2OC4zOTM0NDMsInN1YiI6IjY2YjY2OTc5NmY5Y2I0ZTJlNjA3MTQ5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aqFVuWr_QHudTV7x-CIeoCd1wPMA55fT5zPgexsfEa4'
//     }
// };
//
// // export const genreList = () => {
// //     fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
// //         .then(response => response.json())
// //         .then(response => console.log(response))
// //         .catch(err => {
// //             console.error(err);
// //             throw err;  // добавляем повторное выбрасывание ошибки, чтобы её можно было обработать позже
// //         });
// // }
// export const genreList = async () => {
//     return await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Network response was not ok');
//             }
//             return response.json();
//         })
//         .catch(err => {
//             console.error(err);
//             throw err;  // Повторное выбрасывание ошибки для обработки в `useEffect`
//         });
// }
//
// export const discoverMovie = async () => {
//     return await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }
//
// export const moviesDetails = async () => {
//     return await fetch('https://api.themoviedb.org/3/movie/movie_id?language=en-US', options)
//         .then(response => response.json())
//         .then(response => console.log(response))
//         .catch(err => console.error(err));
// }
