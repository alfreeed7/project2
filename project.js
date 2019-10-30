var filmpromise=d3.json("https://swapi.co/api/films/");
filmpromise.then
(
    function(film)
    {
        seth1();
        console.log("films",film);
        filmsname(film.results);

    },
    function(err)
{
    console.log("fail",err)}
)

var planetpromise=d3.json("https://swapi.co/api/planets/");
planetpromise.then
(
    function(planet)
    { 
     console.log("planets",planet)
     addplanet(planet.results);
    },
    function(err)
{
    console.log("fail",err)}
)


var seth1 = function()
    {
        d3.select("h1").text("Star Wars App")
    }

var filmsname= function (film)
{ 
    d3.select(".films")
    .selectAll("th")
    .data(film)
    .enter()
    .append("th")
    .text(function(d){return d.title;})
    .on("click",function(f)
        {removeintro();
        intro(f)})  
}

var removeintro=function()
{d3.selectAll(".intro *").remove();}

var intro=function (film)
{
    console.log(film)
var add=d3.select(".intro")
add.append("h2")
    .text("Introduction of the Film")
    add.append("p")
    .text(film.opening_crawl);
}

//var rec = d3.select(".planets")
//.append("rect")
//.attr("width", 50)
//.attr("height", 50)
//.text("click me");

//var button=document.createElement("button");
//button.innerHTML="SB"
//
//var appendit=document.getElementsByClassName("planets");
//appendit.appendChild(button);
//
//button.addEventListener("click",function(planet){addplanet(planet)})

var addplanet = function(planet) {
    var rect = d3.select("svg").append("rect")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("width", 100)
                    .attr("height", 50)
    .text("sb")
                    .attr("fill", "gray")
                    .on("click", function(p) 
    {                    
 
    var newcol=d3.select(".planet")
    .selectAll("tr")
    .data(planet)
    .enter()
    .append("tr")

    newcol
    .append("td")
    .text(function(d){return d.name;})
    
    newcol.append("td")
    .text(function(d){return d.rotation_period;})
    
        newcol.append("td")
    .text(function(d){return d.orbital_period;})
    
        newcol.append("td")
    .text(function(d){return d.diameter;})
    
        newcol.append("td")
    .text(function(d){return d.climate;})
    
        newcol.append("td")
    .text(function(d){return d.gravity;})
    
        newcol.append("td")
    .text(function(d){return d.surface_water;})
    
        newcol.append("td")
    .text(function(d){return d.population;})
                    })
    
}