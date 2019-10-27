var filmpromise=d3.json("https://swapi.co/api/films/");
filmpromise.then
(
    function(SW)
    {
        seth1();
        console.log("star wars",SW);
        buildTable(SW);
    }, 
    function(err)
{
    seth1("Nah");}
)

var seth1 = function()
    {
        d3.select("h1").text("Star Wars App")
    }

var buildTable = function (SW)
{
d3.select("thead")
    .selectAll("tr")
    .data(SW)
    .enter()
    .append("tr")
    .append("td")
    .text(function(SW){return SW.title})
}