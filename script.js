 function criaMapa() {
    var nomeUm = document.getElementById("nomeUm").value;
    var nomeDois = document.getElementById("nomeDois").value;
    var nomeTres = document.getElementById("nomeTres").value;
    var nomeQuatro = document.getElementById("nomeQuatro").value;
    var nomeCinco = document.getElementById("nomeCinco").value;
    var nomeSeis = document.getElementById("nomeSeis").value;

    var nomes = [nomeUm,nomeDois, nomeTres, nomeQuatro, nomeCinco, nomeSeis]

    var porUm = document.getElementById("porUm").value;
    var porDois = document.getElementById("porDois").value;
    var porTres = document.getElementById("porTres").value;
    var porQuatro = document.getElementById("porQuatro").value;
    var porCinco = document.getElementById("porCinco").value;
    var porSeis = document.getElementById("porSeis").value;

    var porcentagens = [porUm, porDois, porTres, porQuatro, porCinco, porSeis]

    var porcUm = document.getElementById("porcUm").value;
    var porcDois = document.getElementById("porcDois").value;
    var porcTres = document.getElementById("porcTres").value;
    var porcQuatro = document.getElementById("porcQuatro").value;
    var porcCinco = document.getElementById("porcCinco").value;
    var porcSeis = document.getElementById("porcSeis").value;

    var porcentagem = [porcUm, porcDois, porcTres, porcQuatro, porcCinco, porcSeis]

    var area = 250000

    function width(x){
        var width = (Math.sqrt(area*(x/100))) + "px"
        return width
    }
     
    function color(x){
        if (x < 100 && x >= 90 ){
            var color = "#4B0082"
        }else if (x < 90 && x >= 30){
        var color = "#B22222"
        }else if (x < 30 && x >= 25){
            var color = "#FF0000"
        }else if (x < 25 && x >= 20){
            var color = "#FF6347"
        }else if (x < 20 && x >= 15){
            var color = "#FFA07A"
        }else if (x < 15 && x >= 0){
            var color = "#FFC0CB"
        } else if (x < 0){
            var color = "#ADFF2F"
        }
        return color
    }

    var treemap = document.getElementById("treemap")
    var um = document.getElementById("um")
    var dois = document.getElementById("dois")
    var tres = document.getElementById("tres")
    var quatro = document.getElementById("quatro")
    var cinco = document.getElementById("cinco")
    var seis = document.getElementById("seis")

    var divs = [um, dois, tres, quatro, cinco, seis]


    treemap.style.display = "none"
    console.log(treemap.style.display)
    if(treemap.style.display == "none"){
        treemap.style.display = "flex"
        treemap.style.flexWrap = "wrap"

        for(let i = 0; i < nomes.length; i++){
        divs[i].innerHTML = "<h2>" + nomes[i] + "</h2>"
        divs[i].style.flexBasis = width(porcentagens[i])
        divs[i].style.backgroundColor = color(porcentagem[i])
        divs[i].style.border = "1px solid black"
        divs[i].style.flexGrow = "1"
        divs[i].style.flexShrink = "1"
        }

}
 }
