// let category = 'toys';

// console.log(`http://someurl.com/${category}`);

// let user = 'Ivan';

// alert(`hello, ${user}`);

// let incr = 10,
//     decr = 10;

// console.log(incr++);
// console.log(decr--);

// for (i = 0; i < 10; i++) {
//     console.log(i);
// }

// let isChecked = true,
//     isClosed = true;

// console.log(isChecked || isClosed);

// console.log(2 + 2 * 6 !== '6');

let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let qw1 = prompt('Один из последних просмотренных фильмов?');
let qw2 = +prompt('На сколько оцените его?');
personalMovieDB.movies[qw1] = qw2;

let qw3 = prompt('Один из последних просмотренных фильмов?');
let qw4 = +prompt('На сколько оцените его?');
personalMovieDB.movies[qw3] = qw4;

console.log(personalMovieDB);