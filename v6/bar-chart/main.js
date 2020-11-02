// https://observablehq.com/@d3/sortable-bar-chart

data = [
	{name: "A", value: Math.random()},
	{name: "B", value: Math.random()},
	{name: "C", value: Math.random()},
	{name: "D", value: Math.random()},
	{name: "E", value: Math.random()},
	{name: "F", value: Math.random()},
	{name: "G", value: Math.random()},
	{name: "H", value: Math.random()},
]

console.log(data)

// setting varants
margin = {top: 20, right: 0, bottom: 30, left: 40}
height = 250
width = 400

// define the x an y axis scaling

// https://github.com/d3/d3-scale/blob/v3.2.2/README.md#scaleBand
x = d3.scaleBand()
	.domain(data.map(d => d.name))
	.range([margin.left, width - margin.right])
	.padding(0.1)

// https://github.com/d3/d3-scale/blob/v3.2.2/README.md#scaleLinear
y = d3.scaleLinear()
	.domain([0, d3.max(data, d => d.value)])
	.nice()
	.range([height - margin.bottom, margin.top])

// define the x and y axis
xAxis = g => g
	.attr("transform", "translate(0, " + (height - margin.bottom) + ")")
	.call(d3.axisBottom(x).tickSizeOuter(0))
yAxis = g => g
	.attr("transform", "translate(" + margin.left + ", 0)")
	.call(d3.axisLeft(y))

// building the chart

// create the svg with viewBox attribute
var svg = d3.select("body").append("svg")
	.attr("viewBox", [0, 0, width, height])

// non view box way
// var svg = d3.select("body").append("svg")
// 	.attr("width", width + margin.left + margin.right)
// 	.attr("height", height + margin.top + margin.bottom)


var bar = svg.append("g")
	.attr("fill", "steelblue")
	.selectAll("rect")
	.data(data)
	.join("rect")
	.style("mix-blend-mode", "multiply")
	.attr("x", d => x(d.name))
	.attr("y", d => y(d.value))
	.attr("height", d => y(0) - y(d.value))
	.attr("width", x.bandwidth())

// draw x and y axis
var gx = svg.append("g").call(xAxis)
var gy = svg.append("g").call(yAxis)

var legend = svg.selectAll("legend")
	.data(["some", "data"])
