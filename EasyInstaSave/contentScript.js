const intervaloTempo = 3000; //Altere esse valor para mudar de quanto em quanto tempo o método retirarLabel será chamado

//primeira execução (pra não ser necessário esperar intervaloTempo ao carregar a pagina)
possibilitaSalvar();
//Irá chamar os métodos a cada intervaloTempo
setInterval(possibilitaSalvar, intervaloTempo);
/**
 * Método para que possa continuar a executar os salvarFotos e salvarVídeos
 * @author Vitor Ceolin
 */
function possibilitaSalvar(){
    possibilitaSalvarFotos();
    possibilitaSalvarVideos();
}

var divs_IMAGEM //variavel declarada fora do metodo abaixo para näo serem excluidas após o fim da execução
/**
 * Método para retirar as divs que ficam na frente das fotos.
 * @author Vitor Ceolin
 */
function possibilitaSalvarFotos() {
    divs_IMAGEM = document.getElementsByClassName("_9AhH0"); // cria uma lista com as divs

    for(var i = 0; i < divs_IMAGEM.length; i++)//for para percorrer todas as divs de video encontradas
    {
        //dando um ID para as divs
        divs_IMAGEM[i].id = "divs_IMAGEM_" + i;
        //aqui remove as classes para que possibilite o video ser salvo
        divs_IMAGEM[i].oncontextmenu = function () {
            this.classList.remove("_9AhH0"); //apaga a div para que a foto possa ser salva
        }
    }
}   

//variaveis declaradas fora do metodo abaixo para näo serem excluidas após o fim da execução
var divs_PyenC;
var divs_fXIG0;
var divs_VIDEO;
/**
 * Metodo que adiciona uma propriedade aos videos para ao clicar com o botäo direito remover as divs que impedem de salvar o video
 * @author Vitor Ceolin
 */
function possibilitaSalvarVideos() {
        divs_PyenC = document.getElementsByClassName("PyenC");
        divs_fXIG0 = document.getElementsByClassName("fXIG0");
        divs_VIDEO = document.getElementsByClassName("_5wCQW");
    for(var i = 0; i < divs_fXIG0.length; i++)//for para percorrer todas as divs de video encontradas
    {
        //dando um ID para as divs
        divs_PyenC[i].id = "divs_PyenC_" + i;
        divs_fXIG0[i].id = "divs_fXIG0_" + i;
        divs_VIDEO[i].id = "divs_VIDEO_" + i;

        //o onmouseover serve para READICIONAR as divs depois do right click, para que não haja mal funcionamento no player
        divs_VIDEO[i].onmouseover = function(){
            var split = this.id.split("_"); //separa o id pra pegar o valor de I
            var _id = split[2]; // o id fica na terceira posição ( divs_VIDEO_ID )
            document.getElementById("divs_PyenC_" + _id.toString()).classList.add("PyenC");
            document.getElementById("divs_fXIG0_" + _id.toString()).classList.add("fXIG0");
        };
        //aqui remove as classes para que possibilite o video ser salvo
        divs_fXIG0[i].oncontextmenu = function () {
            this.classList.remove("fXIG0");
            var split = this.id.split("_"); //separa o id pra pegar o valor de I
            var _id = split[2]; // o id fica na terceira posição ( divs_PyenC_ID )
            document.getElementById("divs_PyenC_" + _id.toString()).classList.remove("PyenC");
        };
    }
}

