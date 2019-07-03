//get the data
data = d3.csvParse(iris, d3.autotype)

var w =400;
var h =400;
var margin = 20;
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
.domain([0,d3max(data, d =>d.sepal_length)])
.range([0,width])

console.log(x(3.5))


//scale for y
var xy = d3.scaleLinear()
.domain([0,d3max(data, d=>d.sepal_widthth)])
.range([0,height])
