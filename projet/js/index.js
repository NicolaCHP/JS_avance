import  {film as f} from "./film.class.js";
import  {search} from "./search.class.js";

//récupère l'Api et le transforme en Json
async function getJson(){
    let response = await fetch("https://ghibliapi.herokuapp.com/films/");
    return await response.json();
};
const films = await getJson(); 

//La fonction affiche chaque film dans la page d'acceuil
function showAllFilm(films){
    films.forEach(e => {
        let film = new f(e);
        document.getElementById('main').innerHTML += film.showFilm();
    });
}; 
showAllFilm(films);

document.getElementById("search").onclick =  async function(){
    const s = new search(films);
    s.initialise();
    //lancement des chercheurs
    document.getElementById("Year-select").onchange = function(){s.year()};
    document.getElementById("Title-select").onchange = function(){s.title()}; 
}