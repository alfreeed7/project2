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

var filmpromise=d3.json("https://swapi.co/api/planets/");
filmpromise.then
(
    function(planet)
    {
        console.log("planets",planet);
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
    add.append("p")
    .text(film.opening_crawl);
    add.append("p")
    .text(film.release_date);
}

var addplanet=function(planet)

{
    var newcol=d3.select(".planet")
    .selectAll("tr")
    .data(planet)
    .enter()
    .append("tr")

    newcol.append("td")
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
    
}