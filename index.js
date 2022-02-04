function dataClima(data){
    $("#div_carga").css("display","none");
    $("#tempActual").text(": "+data.main.temp);
    $("#max").text(": "+data.main.temp_max);
    $("#min").text(": "+data.main.temp_min);
    $("#description").text(": "+data.weather[0].description);
    $("#windSpeed").text(": "+data.wind.speed + " Km/h");
}


$.get("http://api.openweathermap.org/data/2.5/weather?q=Buenos%20aires&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es").success(cargado)

$("#Berlin").on("click", function(){
$("#container").html("<ul>Obteniendo Datos...</ul>");
$("#div_carga").css("display","block");

$.get("http://api.openweathermap.org/data/2.5/weather?q=Berlin&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es").success(cargado);
})

$("#NewYork").on("click", function(){
$("#container").html("<ul>Obteniendo Datos...</ul>");
$("#div_carga").css("display","block");

$.get("http://api.openweathermap.org/data/2.5/weather?q=Nueva%20York&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es").success(cargado);
})

$("#BuenosAires").on("click", function(){
$("#container").html("<ul>Obteniendo Datos...</ul>");
$("#div_carga").css("display","block");

$.get("http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es").success(cargado);
})

$("#ciudad").on("keypress", function(evento){
    
    if(evento.key=="Enter"){
    
        if(evento.target.value === ""){
            alert("El campo de busqueda no debe estar vacio");
        }
        else{
                $("#container").html("<ul>Obteniendo Datos...</ul>");
                $("#div_carga").css("display","block");
                var input= encodeURI(evento.target.value);
                evento.target.value= null;
                var url= "http://api.openweathermap.org/data/2.5/weather?q="
                var url2= "&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es"
                
                
                
                $.get(url+input+url2).success(cargado);
                
            }
        }
})

function cargado (data){
    $("#container").html("<ul><li>Temperatura actual <span id='tempActual'></span></li><li>Temperatura máxima <span id='max'></span></li><li>Temperatura mínima <span id='min'></span></li><li>Descripción de las condiciones actuales <span  id='description'></span></li><li>Velocidad del viento <span id='windSpeed'></span></li></ul>");
   
    $("#div_carga").css("display","none");
    dataClima(data);
};

