var filmpromise=d3.json("https://swapi.co/api/films/");
filmpromise.then
(
    function(film)
    {
        seth1();
        console.log("films",film);
        filmsname(film);
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
    .data(film.results)
    .enter()
    .append("th")
    .text(function(d){return d.title;})
    .on("click",function(){intro(film)})
}

var intro=function (film,index)
{
    d3.select(".planets")
    .selectAll("p")
    .data(film.results)
    .enter()
    .append("p")
    .text(function(d){return d.opening_crawl;})
}