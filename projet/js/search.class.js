import  {film as f} from "./film.class.js";
export class search{
    constructor(films){
        this.films=films;
    }

    //On initialise les inputs et les changeurs
    initialise(){
        let inpYears = `<select id="Year-select"><option value="">Year</option>`
        let years = [];
        this.films.forEach(film => {
            //On regarde si l'année est déjà une option
            if(!years.includes(film.release_date)){ inpYears += `<option value="${film.release_date}">${film.release_date}</option>`}
            years.push(film.release_date);
        });
        document.getElementById('searchClicked').innerHTML = 
            inpYears
            +`<input type="search" id="Title-select" placeholder="Search by title" ><button>Search</button>`
        
    }

    year(){
        let year = document.getElementById("Year-select").value;
        document.getElementById('main').innerHTML = "";
        if(year ==""){
            this.films.forEach(e=> {
                    let film = new f(e);
                    document.getElementById('main').innerHTML += film.showFilm();
            });
        }else{
            this.films.forEach(film => {
                film = new f(film);
                if(film.getDate() == year){ document.getElementById('main').innerHTML += film.showFilm() };
            });   
        };
    }

    //Fonction sur changement de titre
    title(){
        let title = document.getElementById("Title-select").value;
        document.getElementById('main').innerHTML = "";
        if(title ==""){
            this.films.forEach(e=> {
                let films =new f(e);
                document.getElementById('main').innerHTML += films.showFilm();
            });
        }else{
            this.films.forEach(e=> {
                let film = new f(e);
                if(film.getTitle().toLowerCase().includes(title.toLowerCase())){ document.getElementById('main').innerHTML += film.showFilm() }
            });
        }
    }
}