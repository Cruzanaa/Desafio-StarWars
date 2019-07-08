var planetas = [
    {
    nome: 'hoth',
    clima: 'frio',
    terreno:'arrido',
    filmes: '2 filmes',
},{
    nome: 'taris',
    clima: 'quente',
    filmes: '1 filme',
},{
    nome: 'hutta',
    clima: 'deserto',
    filmes: '1 filme',
}]

var botaoRandom = document.querySelector('#BotaoRandom');

botaoRandom.addEventListener('click', criarRandom);

function criarRandom(evento){
    document.getElementsByName('.planetas').innerHTML=Math.floor(Math.random()*20);
    console.log(planetas);
}