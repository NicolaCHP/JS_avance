export class film{
    constructor(film){
        this.film = film;
    }

    getDate(){ return this.film.release_date;}
    getTitle(){ return this.film.title;}

    showFilm(){
        return `  
        <div class="filmDescription">
            <img src="${this.film.image}">
            <h2 id="titleFilm"> ${this.film.title}</h2>
            <h3 id="titleFilmOriginRomanised"> ${this.film.original_title_romanised}</h3>
            <p>Director : ${this.film.director}, made in ${this.film.release_date}</p>
            <p class="descr">${this.film.description}</p>
        </div>
        `
    }
}