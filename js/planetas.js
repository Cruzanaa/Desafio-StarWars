//var Planetas = document.querySelectorAll('.planetas');

var Planetas = [{
    nome: 'Planeta: ALDERAAN',
    id: '1',
    populacao: 'População: 20000000000',
    clima: ' Clima: temperado',
    terreno: 'Terreno: Pastagem / Montanhas', 
    filmes: 'Filme: 6 e 1',
    imagem: 'url(img/alderaan.png)'
},{
    nome: 'Planeta: Yavin IV',
    id: '2',
    populacao: 'População: 1000',
    clima: 'Clima: temperado / trópical',
    terreno: 'Terreno: pastagem / montanhas', 
    filmes: 'Filme: 6 / 1', 
    imagem: 'url(img/bespin.png)'
},{
    nome: 'Planeta: Hoth',
    id: '3',
    populacao: 'População: unknown',
    clima: 'Clima: frio',
    terreno: 'Terreno: tundra / cavernas de gelo / cordilheiras', 
    filmes: 'Filme: 2',
    imagem: 'url(img/corellia.png)'
},{
    nome: 'Planeta: Dagobah',
    id: '4',
    populacao: 'População: unknown',
    clima: 'Clima: obscuro',
    terreno: 'Terreno: pântano / selvas', 
    filmes: 'Filme: 2 / 6 / 3',
    imagem: 'url(img/coruscant.png)'
},{
    nome: 'Planeta: Bespin',
    id: '5',
    populacao: 'População: 118000',
    clima: 'Clima: temperado',
    terreno: 'Terreno: gás gigante', 
    filmes: 'Filme: 2',
    imagem: 'url(img/dagobah.png)'
},{
    nome: 'Planeta: Endor',
    id: '6',
    populacao: 'População: 3000000',
    clima: 'Clima: temperado',
    terreno: 'Terreno: floresta / montanhas / lagos', 
    filmes: 'Filme: 3',
    imagem: 'url(img/endor.png)'
},{
    nome: 'Planeta: Naboo',
    id: '7',
    populacao: 'População: 450000000',
    clima: 'Clima: temperado',
    terreno: 'Terreno: colinas vítreas / pântano / florestas / montanhas', 
    filmes: 'Filme: 5 / 4 / 6 / 3',
    imagem: 'url(img/hoth.png)'
},{ 
    nome: ' Planeta: Coruscant',
    id: '8',
    populacao: 'População: 1000000000000',
    clima: 'Clima: temperado',
    terreno: 'Terreno: cidades espaçiais / montanhas', 
    filmes: 'Filme: 5 / 4 / 6 / 3',
    imagem: 'url(img/kamino.png)'
},{
    nome: 'Planeta: Kamino',
    id: '9',
    populacao: 'População: 10000000',
    clima: 'Clima: temperado',
    terreno: 'Terreno: oceanos', 
    filmes: 'Filme: 5',
    imagem: 'url(img/kashyyk.png)'
},{
    nome: 'Planeta: Mustafar',
    id: '10',
    populacao: 'População: 20000',
    clima: 'Clima: quente',
    terreno: 'Terreno: vulcões / montanhas de larva / montanhas / cavernas', 
    filmes: '6',
    imagem: 'url(img/mustafar.png)'
},{
    nome: 'Planeta: Utapau',
    id: '11',
    populacao: 'População: 95000000',
    clima: 'Clima: temperado / arido / ventoso',
    terreno: 'Terreno: cerrados / savannas / desfiladeiros / buracos', 
    filmes: 'Filme: 6',
    imagem: 'url(img/naboo.png)'
},{
    nome: 'Planeta: Tatooine',
    id: '12',
    populacao: 'População: 200000',
    clima: 'Clima: arido',
    terreno: 'Terreno: deserto', 
    filmes: 'Filme: 5 / 4 / 6 / 3 /1',
    imagem: 'url(img/tatooine.png)'
},{
    nome: 'Planeta: Ord Mantell',
    id: '13',
    populacao: 'População: 14050',
    clima: 'Clima: temperado',
    terreno: 'Terreno: planíces / mares', 
    filmes: 'Filme: 2',
    imagem: 'url(img/ord.png)'
},{
    nome: 'Planeta: Dagobah',
    id: '14',
    populacao: 'População: sem dados',
    clima: 'Clima: obscuro',
    terreno: 'Terreno: pântano / selvas', 
    filmes: 'Filme: 2 / 6 / 3',
    imagem: 'url(img/dagobah.png)'
},{
    nome: 'Planeta: Rodia',
    id: '15',
    populacao: 'População: 1300000000',
    clima: 'Clima: quente',
    terreno: 'Terreno: oceanos / selva / pântano / urbano', 
    filmes: 'Filme: sem dado',
    imagem: 'url(img/rodia.png)'
},{
    nome: 'Planeta: Corellia',
    id: '16',
    populacao: 'População: 3000000000',
    clima: 'Clima: temperado',
    terreno: 'Terreno: planíces / urbano / colinas / florestas', 
    filmes: 'Filme: sem dado',
    imagem: 'url(img/corellia.png)'
},{
    nome: 'Planeta: Saleucami',
    id: '17',
    populacao: 'População: 1400000000',
    clima: 'Clima: quente',
    terreno: 'Terreno: cavernas / desertos / montanhas / vulcões', 
    filmes: 'Filme: sem dado',
    imagem: 'url(img/saleucami.png)'
},{
    nome: 'Planeta: Kashyyk',
    id: '18',
    populacao: 'População: 45000000',
    clima: 'Clima: tropical',
    terreno: 'Terreno: selvas / florestas / lagos / rios', 
    filmes: 'Filmes: 6',
    imagem: 'url(img/kashyyk.png)'
},{
    nome: 'Planeta: Eriadu',
    id: '19',
    populacao: 'População: 22000000000',
    clima: 'Clima: poluído',
    terreno: 'Terreno: cidade espaçial', 
    filmes: 'Filme: sem dado',
    imagem: 'url(img/eriadu.png)'
},{
    nome: 'Planeta: Nal Hutta',
    id: '20',
    populacao: 'População: 700000000',
    clima: 'Clima: temperado',
    terreno: 'Terreno: urbano / oceanos / pântanos', 
    filmes: 'Filme: sem dado',
    imagem: 'url(img/nal.png)'
}
]

var planetaAleatorio;

var botaoRandom = document.querySelector('#BotaoRandom');

botaoRandom.addEventListener('click', criarRandom);


function criarRandom(){
    aleatorio = Math.floor(Math.random() * 20);  /*--criando aleatório--*/
    planetaAleatorio = Planetas[aleatorio];
    mostrarInfo();
}


var botaoInfo = document.querySelector('.infoPlanetas');

botaoInfo.addEventListener('click', mostrarInfo);

  function mostrarInfo(){
   document.getElementById('nome').innerHTML = planetaAleatorio.nome;
      document.getElementById('clima').innerHTML = planetaAleatorio.clima;
      document.getElementById('terreno').innerHTML = planetaAleatorio.terreno;
      document.getElementById('filmes').innerHTML = planetaAleatorio.filmes;
      //document.getElementById('imgPlaneta').innerHTML = planetaAleatorio.imagem;
      document.getElementById('imgPlaneta').style.backgroundImage = planetaAleatorio.imagem;
    
    }

        function printPlanet () {
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


