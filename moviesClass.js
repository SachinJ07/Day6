class Movie {
    constructor(title, studio, rating) {
        this.title = title;
        this.studio = studio;
        this.defaultRating = "PG-13";
        this.rating = (rating !== undefined) ? rating : this.defaultRating;// "PG" as default when no rating is provided.
    }
    getPG() {
        return ` Movie  : ${this.title}\n Studio : ${this.studio}\n Rating : ${this.rating}`
    }
}
let movie1 = new Movie("Fight club", "20Th Century Fox","R");
console.log(movie1.getPG());

let movie2 = new Movie("Wrath of man", "Metro-Goldwyn-Mayer",);
console.log(movie2.getPG());

/*
Output:
 Movie  : Fight club
 Studio : 20Th Century Fox
 Rating : R
 Movie  : Wrath of man
 Studio : Metro-Goldwyn-Mayer
 Rating : PG-13

*/