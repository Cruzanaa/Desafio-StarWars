var Planetas = document.querySelectorAll('.planetas');

Planetas = [{
    nome: 'Alderaan',
    population: '20000000000',
    clima: 'temperate',
    terreno: 'grasslands / mountains', 
    filmes: '6 e 1',
},{
    nome: 'Yavin IV',
    population: '1000',
    clima: 'temperate / tropical',
    terreno: 'grasslands / mountains', 
    filmes: '6 e 1', 
},{
    nome: 'Hoth',
    population: 'unknown',
    clima: 'frozen',
    terreno: 'tundra/ ice caves / mountain ranges', 
    filmes: '2',
},{
    nome: 'Dagobah',
    population: 'unknown',
    clima: 'murky',
    terreno: 'swamp / jungles', 
    filmes: '2 / 6 / 3',
},{
    nome: 'Bespin',
    population: '118000',
    clima: 'temperate',
    terreno: 'gas giant', 
    filmes: '2',
},{
    nome: 'Endor',
    population: '3000000',
    clima: 'temperate',
    terreno: 'florest / mountains / lakes', 
    filmes: '3',
},{
    nome: 'Naboo',
    population: '450000000',
    clima: 'temperate',
    terreno: 'glassy hills / swamps / florests / mountains', 
    filmes: '5 / 4 / 6 / 3',
},{ 
    nome: 'Coruscant',
    population: '1000000000000',
    clima: 'temperate',
    terreno: 'cityscape / mountains', 
    filmes: '5 / 4 / 6 / 3',
},{
    nome: 'Kamino',
    population: '10000000',
    clima: 'temperate',
    terreno: 'ocean', 
    filmes: '5',
},{
    nome: 'Mustafar',
    population: '20000',
    clima: 'hot',
    terreno: 'volcanoes / lava rivers / mountains / caves', 
    filmes: '6',
},{
    nome: 'Utapau',
    population: '95000000',
    clima: 'temperate / arid / windy',
    terreno: 'scrublands / savanna / canyons / sinkholes', 
    filmes: '6',
}]


var botaoRandom = document.querySelector('#BotaoRandom');

botaoRandom.addEventListener('click', criarRandom);

var aleatorio= Math.floor(Math.random()*20); /*-- criando aleatório --*/


function criarRandom(evento){

    planetaAleatorio = Planetas[aleatorio];
    alert(planetaAleatorio['nome']);
}

/*var random = Math.floor(Math.random() * 10) + 1;
console.log(random);

  document.getElementsByName('.planetas').innerHTML=Math.floor(Math.random()*20);
    console.log(planetas);
    
     for( var SorteioPlanetas = 0; SorteioPlanetas > Planetas.length; SorteioPlanetas ++){
window.location.href = "http://seusite.com"
  
  }*/

    
