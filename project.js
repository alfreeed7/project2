var filmPromise = d3.json("https://swapi.co/api/films")
filmPromise.then(
function(film)
    
    
{
    seth1();
filminfo(film.results);
console.log (film);
},
);

var seth1 = function()
    {
        d3.select("h1").text("Star Wars App")
    }


var pics=["a new hope.jpg","Attack%20of%20the%20Clones.jpg","The%20Phantom%20Menace.jpg","Revenge%20of%20the%20Sith.jpg","Return%20of%20the%20Jedi.jpg","The%20Empire%20Strikes%20Back.jpg","The%20Force%20Awakens.jpg"]

var filminfo = function(film)
{                                                                    
d3.select(".films")
    .selectAll("img")
    .data(film)
    .enter()
    .append("img")
    .attr("src",function(f,i){return pics[i]})
    .on("click", function(d) { 
    removethings();intro(d);planetinfo(d)
                          })
    
    
}



var removethings=function()
{d3.selectAll(".intro *").remove();
d3.selectAll("tr:not(:first-child)").remove()}


var intro=function (film)
{
    console.log(film)
var add=d3.select(".intro")
    add.append("h3")
    .text(film.title)
    add.append("p")
    .text(film.opening_crawl);
    add.append("p")
    .text("See the planets below")
    

}

var planetinfo = function(film)
{
    
    var pla = film.planets;
    
     var plaPromise = pla.map(function(pla)
    {
                 console.log(pla);
                 return d3.json(pla);
    })
               
    Promise.all(plaPromise).then(function(planet)
                                 
    {
        console.log("planet",planet)
        addplanet(planet)
    })
        
  
     
    var addplanet = function(planet){  
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
                    
    d3.select("#rp")
      .on("click", function() {
        console.log(planet)
        planet.sort(function(a, b){
    return a.rotation_period-b.rotation_period
})
 d3.select(".planet").selectAll("tr").remove()
           d3.select(".planet").append("th").text("Name")
           d3.select(".planet").append("th").text("Rotation_Period")
           d3.select(".planet").append("th").text("Orbital_Period")
           d3.select(".planet").append("th").text("Diameter")
           d3.select(".planet").append("th").text("Climate")
           d3.select(".planet").append("th").text("Gravity")
           d3.select(".planet").append("th").text("Terrain")
           d3.select(".planet").append("th").text("Surface_Water")
           d3.select(".planet").append("th").text("Population")
         
          
          
    var newcoll= d3.select(".planet")
    .selectAll("tr")
    .data(planet)
    .enter()
    .append("tr")

    newcoll
    .append("td")
    .text(function(d){return d.name;})
           newcoll.append("td")
    .text(function(d){return d.rotation_period;})
    
        newcoll.append("td")
    .text(function(d){return d.orbital_period;})
    
        newcoll.append("td")
    .text(function(d){return d.diameter;})
    
        newcoll.append("td")
    .text(function(d){return d.climate;})
                                newcoll.append("td")
    .text(function(d){return d.gravity;})
    
        newcoll.append("td")
    .text(function(d){return d.terrain;})
    
        newcoll.append("td")
    .text(function(d){return d.surface_water;})
    
        newcoll.append("td")
    .text(function(d){return d.population;})
                    })

    
            
    }

    }


