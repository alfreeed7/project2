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
    .on("click",function(f){intro(f)})
    {removeintro();
    intro(film,films)}
}

var removeintro=function()
{d3.selectALL(".intro*").remove()}

var intro=function (film)
{
    console.log(film)
    d3.select(".intro")
    .append("p")
    .text(film.opening_crawl)
}