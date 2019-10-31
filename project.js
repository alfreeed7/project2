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
        //makesort(planet.results);
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
    var abcd = d3.select("svg")
    .append("text").text('Click to Explore the Planets')
    .attr("x", 2)
    .attr("y", 35)
    .attr("fill", "white")
                    .on("click", function(p) 
    {                    
    
    var newcol= d3.select(".planet")
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
    
//    var rp = []
//    for (var i = 0; i < 10; i++) {
//  rp.push(planet[i].rotation_period)
//}
    
    planet.sort(function(a, b){
    return a.rotation_period-b.rotation_period
})
       d3.select("#rp")
      .on("click", function() {
    var newcoll= d3.select(".planet")
    .selectAll("td")
    .data(planet)
    .enter()

    newcoll
    .text(function(d){return d.name;})
    
    newcoll
    .text(function(d){return d.rotation_period;})
    
        newcoll
    .text(function(d){return d.orbital_period;})
    
        newcoll
    .text(function(d){return d.diameter;})
    
        newcoll
    .text(function(d){return d.climate;})
                                newcoll
    .text(function(d){return d.gravity;})
    
        newcoll
    .text(function(d){return d.terrain;})
    
        newcoll
    .text(function(d){return d.surface_water;})
    
        newcoll
    .text(function(d){return d.population;})
} )
    
                    
}
