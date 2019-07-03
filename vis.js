//get the data
data = d3.csvParse(iris, d3.autotype)

var w =400;
var h =400;
var margin = 40;
var width = w -2 * margin;
var height = h -2 * margin;

//select the element id to put the vis
var svg = d3.select("#vis")
.append("svg")
.attr("width", w)
.attr("height", h);

//map the Scales for Data

//scale for x
var x = d3.scaleLinear() 
.domain([d3.min(data, d => d.sepal_length),d3.max(data, d => d.sepal_length)])
.range([0,width])

console.log(x(3.5))


//scale for y
var y = d3.scaleLinear()
.domain([d3.min(data, d => d.sepal_width),d3.max(data, d => d.sepal_width)])
.range([height,0])

var colors = d3.scaleOrdinal(d3.schemeCategory10)
.domain(data.map(d=> d.species))


var main = svg.append("g")
.attr("transform", `translate(${margin} , ${margin})`)

//Draw the mark

main.selectAll("circle")
.data(data)
.enter()
.append("circle")
.attr("cx", d => x(d.sepal_length) )
.attr("cy", d => y(d.sepal_width) )
.attr("r", 5)
.attr("fill", d => colors(d.species))


//Draw Axis
main.append("g")
.call(d3.axisLeft(y))

main.append("g")
.attr("transform", `translate (0, ${height})`)
.call(d3.axisBottom(x))

