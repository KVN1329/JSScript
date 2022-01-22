'use strict';


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из псоледних просмотренных фильмов ?', ''),
//           b = prompt('На сколько оцените его ?', '');
          
//     personalMovieDB[a] = b;
// }

// console.log(personalMovieDB);

let hour = 9;
if (hour < 10 || hour > 18) {
    alert('Office is closed');
}