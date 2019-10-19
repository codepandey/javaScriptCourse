const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
];

// TO DO
// All the movie in 2018 with rating > 4
// sort them by their rating
// Desending order
// pick their title


///////////////////  solution ////////////////

const titles = movies
                .filter(movies => movies.year === 2018 && movies.rating >= 4)
                .sort((a, b) => a.rating - b.rating)
                .reverse()
                .map(movies => movies.title)
                console.log(titles);