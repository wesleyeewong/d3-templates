
// day = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
// month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

// cellSize = 15
// width = 950
// height = 110

// // https://bl.ocks.org/alansmithy/6fd2625d3ba2b6c9ad48

// // groups the data by year
// years = d3.groups(data, d => d.date.getUTCFullYear()).reverse()

// var svg = d3.select("#all").append("svg").attr("viewBox", [0, 0, width, height * years.length])

// var year = svg.selectAll("g")
// 	.data(years)
// 	.join("g")
// 	.attr("transform", (d, i) => `translate(40.5,${height * i + cellSize * 1.5})`);

// var dayLabels = svg.append("g").attr("id", "dayLabels")
// day.forEach((d,i) => {
// 	dayLabels.append("text")
// 	.attr("class", "dayLabel")
// 	.attr("x", -5)
// 	.attr("y", (d) => (i * cellSize) + 50)
// 	.text(d)
// })


