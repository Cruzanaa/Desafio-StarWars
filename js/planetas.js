var Planetas = document.querySelectorAll('.planetas');

Planetas = [{
    nome: 'Alderaan',
    id: '1',
    populacao: '20000000000',
    clima: 'temperate',
    terreno: 'grasslands / mountains', 
    filmes: '6 e 1',
    imagem: 'url(img/yavin.png)'
},{
    nome: 'Yavin IV',
    id: '2',
    populacao: '1000',
    clima: 'temperate / tropical',
    terreno: 'grasslands / mountains', 
    filmes: '6 e 1', 
    imagem: 'url(img/bespin.png)'
},{
    nome: 'Hoth',
    id: '3',
    populacao: 'unknown',
    clima: 'frozen',
    terreno: 'tundra/ ice caves / mountain ranges', 
    filmes: '2',
    imagem: 'url(img/corellia.png)'
},{
    nome: 'Dagobah',
    id: '4',
    populacao: 'unknown',
    clima: 'murky',
    terreno: 'swamp / jungles', 
    filmes: '2 / 6 / 3',
    imagem: 'url(img/coruscant.png)'
},{
    nome: 'Bespin',
    id: '5',
    populacao: '118000',
    clima: 'temperate',
    terreno: 'gas giant', 
    filmes: '2',
    imagem: 'url(img/dagobah.png)'
},{
    nome: 'Endor',
    id: '6',
    populacao: '3000000',
    clima: 'temperate',
    terreno: 'florest / mountains / lakes', 
    filmes: '3',
    imagem: 'url(img/endor.png)'
},{
    nome: 'Naboo',
    id: '7',
    populacao: '450000000',
    clima: 'temperate',
    terreno: 'glassy hills / swamps / florests / mountains', 
    filmes: '5 / 4 / 6 / 3',
    imagem: 'url(img/hoth.png)'
},{ 
    nome: 'Coruscant',
    id: '8',
    populacao: '1000000000000',
    clima: 'temperate',
    terreno: 'cityscape / mountains', 
    filmes: '5 / 4 / 6 / 3',
    imagem: 'url(img/kamino.png)'
},{
    nome: 'Kamino',
    id: '9',
    populacao: '10000000',
    clima: 'temperate',
    terreno: 'ocean', 
    filmes: '5',
    imagem: 'url(img/kashyyk.png)'
},{
    nome: 'Mustafar',
    id: '10',
    populacao: '20000',
    clima: 'hot',
    terreno: 'volcanoes / lava rivers / mountains / caves', 
    filmes: '6',
    imagem: 'url(img/mustafar.png)'
},{
    nome: 'Utapau',
    id: '11',
    populacao: '95000000',
    clima: 'temperate / arid / windy',
    terreno: 'scrublands / savanna / canyons / sinkholes', 
    filmes: '6',
    imagem: 'url(img/naboo.png)'
}]


var botaoRandom = document.querySelector('#BotaoRandom');

botaoRandom.addEventListener('click', criarRandom);


function criarRandom(){
    aleatorio= Math.floor(Math.random()*11);  /*--criando aleatório--*/
    planetaAleatorio = Planetas[aleatorio];
    alert(planetaAleatorio['nome']);
}


var botaoInfo = document.querySelector('.infoPlanetas');

botaoInfo.addEventListener('click', mostrarInfo);

  function mostrarInfo(){
    document.getElementById('nome').innerHTML = Planetas.find[11],[nome];
    document.getElementById('clima').innerHTML = Planetas.find[clima];
    document.getElementById('terreno').innerHTML = Planetas.find[terreno];
    document.getElementById('filmes').innerHTML = Planetas.find[filmes];
}

 /*function inforPlanetas(){
    var PlanetasInfo = document.querySelector('.InfoPlanetas');
        PlanetasInfo = document.createElement('p');
        PlanetasInfo.classList.add('texto-info');
        
    }*/


        function printPlanet () {
            // fetch('https://swapi.co/api/planets/?page=1&format=json')
            //     .then(function (resposta) {
            //         return resposta.json();
            //     })
            //     .then(function (planetas) {
            //         planetas.results.forEach(planeta => {
            //             var planetaDiv = document.querySelector('.planetas');
            //             planetaDiv.appendChild(montaPlaneta(planeta.name));
            //         });
            //     })
            //     .catch(function (err) {
            //         console.log("Something went wrong!", err);
            //     });
            
            Planetas.forEach(planeta => {
                        var planetaDiv = document.querySelector('.planetas');
                        planetaDiv.appendChild(montaPlaneta(planeta.name, planeta.imagem));
                    });
            
        }
        function montaPlaneta (planetaNome, planetaImg) {
            var divPlaneta = document.createElement('div');
            divPlaneta.textContent = planetaNome;
            divPlaneta.classList.add('planeta');
            divPlaneta.classList.add('animate');
            divPlaneta.style.backgroundImage = planetaImg;
            return divPlaneta;
        }
        printPlanet();


