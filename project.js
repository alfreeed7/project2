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


var pics=["a new hope.jpg","Attack%20of%20the%20Clones.jpg","The%20Phantom%20Menace.jpg","Revenge%20of%20the%20Sith.jpg","Return%20of%20the%20Jedi.jpg","The%20Empire%20Strikes%20Back.jpg","The%20Force%20Awakens.jpg"]

var filmsname= function (film)
{ 
    d3.select(".films")
    .selectAll("img")
    .data(film)
    .enter()
    .append("img")
    .attr("src",function(f,i){return pics[i]})
    .on("click",function(f,i)
        {removeintro();
        intro(f)})  
    
}

var removeintro=function()
{d3.selectAll(".intro *").remove();}

var intro=function (film)
{
    console.log(film)
var add=d3.select(".intro")
add.append("h3")
    .text(film.title)
    add.append("p")
    .text(film.opening_crawl);
    add.append("p")
}


var addplanet = function(planet) {
    var rect = d3.select("svg").append("rect")
                    .attr("x", 0)
                    .attr("y", 0)
                    .attr("width", 100)
                    .attr("height", 50)
                    .attr("fill", "gray")
                    .on("click", function(p) 
    {                    
 var textrect=d3.select("rect")
 .append("p")
 .text("SB")
    
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
    .text(function(d){return d.terrain;})
    
        newcol.append("td")
    .text(function(d){return d.surface_water;})
    
        newcol.append("td")
    .text(function(d){return d.population;})
                    })
    
}