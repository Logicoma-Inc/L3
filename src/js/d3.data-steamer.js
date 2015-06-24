(function (d3) {
	'use strict';
	var w = 200; //Global width
	var h = 200; //Global height	
	var nodes  = d3.selectAll("[pie-chart]");
	console.log(nodes[0]);
	for (var i = 0; i < nodes.length; i++) {
	    console.log(nodes[i]);
	}		
	
	
	//*** Pie Charts ***//
	// d3.json(d3.select("[pie-chart]").attr("data-href"), function (error, json) {
		// if (error) return console.warn(error);
		// var data = json;
		// var radius = Math.min(w, h) / 2;
		// var donutWidth = 20;
		// var legendRectSize = 18;
		// var legendSpacing = 4;

		// var color = d3.scale.category10();

		// var svg = d3.select('[pie-chart]')
		  // .append('svg')
		  // .attr('width', w)
		  // .attr('height', h)
		  // .append('g')
		  // .attr('transform', 'translate(' + (w / 2) +
			// ',' + (h / 2) + ')');

		// var arc = d3.svg.arc()
		  // .innerRadius(radius - donutWidth)
		  // .outerRadius(radius);

		// var pie = d3.layout.pie()
		  // .value(function (d) {
			  // return d.value;
		  // })
		  // .sort(null);

		// var tooltip = d3.select('[pie-chart]')
		  // .append('div')
		  // .attr('class', 'chart-tooltip');

		// tooltip.append('div')
		  // .attr('class', 'chart-label');

		// tooltip.append('div')
		  // .attr('class', 'count');

		// tooltip.append('div')
		  // .attr('class', 'percent');

		// var path = svg.selectAll('path')
			// .data(pie(data))
			// .enter()
			// .append('path')
			// .attr('d', arc)
			// .attr('fill', function (d, i) {
				// return color(d.data.name);
			// });

		// path.on('mouseover', function (d) {
			// var total = d3.sum(data.map(function (d) {
				// return d.value;
			// }));
			// tooltip.select('.chart-label').html(d.data.name);
			// tooltip.select('.count').html(d.data.value + '%');
			// tooltip.style('display', 'block');
		// });

		// path.on('mouseout', function () {
			// tooltip.style('display', 'none');
		// });

		// var legend = svg.selectAll('.legend')
			// .data(color.domain())
			// .enter()
			// .append('g')
			// .attr('class', 'legend')
			// .attr('transform', function (d, i) {
				// var height = legendRectSize + legendSpacing;
				// var offset = height * color.domain().length / 2;
				// var horz = -2 * legendRectSize;
				// var vert = i * height - offset;
				// return 'translate(' + horz + ',' + vert + ')';
			// });

		// legend.append('rect')
		  // .attr('width', legendRectSize)
		  // .attr('height', legendRectSize)
		  // .style('fill', color)
		  // .style('stroke', color);

		// legend.append('text')
		  // .attr('x', legendRectSize + legendSpacing)
		  // .attr('y', legendRectSize - legendSpacing)
		  // .text(function (d) {
			  // return d;
		  // });
	// });
	//*** Side Charts ***//
	// d3.json(d3.select("[side-chart]").attr("data-href"), function (error, json) {
		// if (error) return console.warn(error);
		// var data = json,
			// margin = 20,
			// barHeight = 170 / data.length;
		// var legendRectSize = 18;
		// var legendSpacing = 4;
		// var color = d3.scale.category10();

		// var x = d3.scale.linear()
			// .domain([0, d3.max(data, function (d) {
				// return d.Value;
			// })])
			// .range([3, w - 3]);

		// var xAxis = d3.svg.axis()
			// .scale(x)
			// .orient("bottom");

		// var chart = d3.select("[side-chart]")
			// .append("svg")
			// .attr("width", w)
			// .attr("height", h - 10)
			// .append("g");

		// var bar = chart.selectAll("g")
			// .data(data)
			// .enter().append("g")
			// .attr("transform", function (d, i) {
				// return "translate(0," + i * barHeight + ")";
			// }).attr('fill', function (d) {
				// return color(d.Value);
			// });

		// bar.append("rect")
			// .attr("width", function (d) {
				// return x(d.Value);
			// })
			// .attr("height", barHeight - 1);

		// bar.append("text")
			// .attr("x", function (d) {
				// return x(d.Value) - 3;
			// })
			// .attr("y", barHeight / 2)
			// .attr("dy", ".35em")
			// .text(function (d) {
				// return d.Value;
			// });

		// chart.append("g")
			// .attr("class", "x axis")
			// .attr("transform", "translate(0," + (h - 30) + ")")
			// .call(xAxis);

		// var tooltip = d3.select('[side-chart]')
			// .append('div')
			// .attr('class', 'chart-tooltip');

		// tooltip.append('div')
			// .attr('class', 'chart-label');

		// tooltip.append('div')
			// .attr('class', 'count');

		// tooltip.append('div')
			// .attr('class', 'percent');

		// bar.on('mouseover', function (d) {
			// var total = d3.sum(data.map(function (d) {
				// return d.value;
			// }));
			// tooltip.select('.chart-label').html(d.Key);
			// tooltip.select('.count').html(d.Value);
			// tooltip.style('display', 'block');
		// });

		// bar.on('mouseout', function () {
			// tooltip.style('display', 'none');
		// });

		// var legendModal = chart.selectAll('.legend-modal')
		  // .data(data)
		  // .enter()
		  // .append('g')
		  // .attr('class', 'legend-modal').attr('transform', function (d, i) {
			  // return 'translate(0,' + i * 20 + ')';
		  // })
		  // .attr('data-key', function (d) {
			  // return d.Key;
		  // })
		  // .attr('class', 'legend-modal')
		  // .append('text')
		  // .attr('x', legendRectSize + legendSpacing)
		  // .attr('y', legendRectSize - legendSpacing)
		  // .text(function (d) {
			  // return d.Key + " - " + d.Value;
		  // });
	// });

	// //*** Bar-Charts ***//
	// d3.json(d3.select("[bar-chart]").attr("data-href"), function (error, json) {
		// if (error) return console.warn(error);
		// var data = json,
			// margin = 20,
			// legendRectSize = 18,
			// legendSpacing = 4;

		// var color = d3.scale.category10();

		// var x = d3.scale.ordinal()
			// .rangeRoundBands([0, w - 25], '.3')
			// .domain(data.map(function (d, t) {
				// return t;
			// }));

		// var y = d3.scale.linear()
			// .range([(h - 30), 10])
			// .domain([0, d3.max(data, function (d) {
				// return d.value;
			// })]);

		// var xAxis = d3.svg.axis()
			// .scale(x)
			// .orient("bottom");

		// var yAxis = d3.svg.axis()
			// .scale(y)
			// .orient("left")
			// .ticks(4);

		// var svg = d3.select("[bar-chart]").append("svg")
			// .attr("width", w)
			// .attr("height", h)
			// .append("g")
			// .attr("transform", "translate(30,0)");

		// svg.append("g")
			// .attr("class", "x axis")
			// .attr("transform", "translate(0," + (h - 30) + ")")
			// .call(xAxis);

		// svg.append("g")
			// .attr("class", "y axis")
			// .call(yAxis)
			// .append("text")
			// .attr("transform", "rotate(-90)")
			// .attr("y", 7)
			// .attr("dy", ".71em")
			// .style("text-anchor", "end");

		// var path = svg.selectAll("[bar-chart]")
			// .data(data)
			// .enter().append("rect")
			// .attr("class", "bar")
			// .attr("x", function (d, t) {
				// return x(t);
			// })
			// .attr("width", x.rangeBand())
			// .attr("y", function (d) {
				// return y(d.value);
			// })
			// .attr("height", function (d) {
				// return (h - 30) - y(d.value);
			// }).attr('fill', function (d) {
				// return color(d.value);
			// });

		// var tooltip = d3.select('[bar-chart]')
			// .append('div')
			// .attr('class', 'chart-tooltip');

		// tooltip.append('div')
			// .attr('class', 'chart-label');

		// tooltip.append('div')
			// .attr('class', 'count');

		// path.on('mouseover', function (d) {
			// var total = d3.sum(data.map(function (d) {
				// return d.value;
			// }));
			// tooltip.select('.chart-label').html(d.name);
			// tooltip.select('.count').html(d.value);
			// tooltip.style('display', 'block');
		// });

		// path.on('mouseout', function () {
			// tooltip.style('display', 'none');
		// });

		// var legendModal = svg.selectAll('.legend-modal')
		// .data(data)
		// .enter()
		// .append('g')
		// .attr('class', 'legend-modal').attr('transform', function (d, i) {
			// return 'translate(0,' + i * 20 + ')';
		// });

		// legendModal.append('text')
		  // .attr('x', legendRectSize + legendSpacing)
		  // .attr('y', legendRectSize - legendSpacing)
		  // .text(function (d, t) {
			  // return "Label (" + t + ") " + d.name + " - " + d.value;
		  // });
	// });

	// //** Line Charts **//
	// var margin = { top: 5, right: 20, bottom: 30, left: 20 };
	// var parseDate = d3.time.format("%Y%m%d").parse;
	// var legendRectSize = 18;
	// var legendSpacing = 4;
	// var x = d3.time.scale()
		// .range([0, w - 22]);

	// var y = d3.scale.linear()
		// .range([h - margin.top - margin.bottom, 0]);

	// var color = d3.scale.category10();

	// var xAxis = d3.svg.axis()
		// .scale(x)
		// .ticks(1)
		// .orient("bottom");

	// var yAxis = d3.svg.axis()
		// .scale(y)
		// .ticks(4)
		// .orient("left");

	// var line = d3.svg.line()
		// .interpolate("basis")
		// .x(function (d) {
			// return x(d.date);
		// })
		// .y(function (d) {
			// return y(d.temperature);
		// });

	// var svg = d3.select("[line-chart]").append("svg")
		// .attr("width", w)
		// .attr("height", h)
		// .append("g")
		// .attr("transform", "translate(" + (margin.left + 6) + ",5)");

	// d3.tsv(d3.select("[line-chart]").attr("data-href"), function (error, data) {
		// color.domain(d3.keys(data[0]).filter(function (key) {
			// return key !== "date";
		// }));

		// data.forEach(function (d) {
			// d.date = parseDate(d.date);
		// });

		// var cities = color.domain().map(function (name) {
			// return {
				// name: name,
				// values: data.map(function (d) {
					// return { date: d.date, temperature: +d[name] };
				// })
			// };
		// });

		// x.domain(d3.extent(data, function (d) {
			// return d.date;
		// }));

		// y.domain([
		  // d3.min(cities, function (c) {
			  // return d3.min(c.values, function (v) {
				  // return v.temperature;
			  // });
		  // }),
		  // d3.max(cities, function (c) {
			  // return d3.max(c.values, function (v) {
				  // return v.temperature;
			  // });
		  // })
		// ]);

		// svg.append("g")
			// .attr("class", "x axis")
			// .attr("transform", "translate(0," + (h - 35) + ")")
			// .call(xAxis);

		// svg.append("g")
			// .attr("class", "y axis")
			// .call(yAxis)
			// .append("text")
			// .attr("transform", "rotate(-90)")
			// .attr("y", 6)
			// .attr("dy", ".71em")
			// .style("text-anchor", "end");

		// var city = svg.selectAll(".city")
			// .data(cities)
			// .enter().append("g")
			// .attr("class", "city");

		// city.append("path")
			// .attr("class", "line")
			// .attr("d", function (d) {
				// return line(d.values);
			// })
			// .style("stroke", function (d) {
				// return color(d.name);
			// });

		// var legend = svg.selectAll('.legend-modal')
			// .data(color.domain())
			// .enter()
			// .append('g')
			// .attr('class', 'legend-modal')
			// .attr('class', 'legend-modal').attr('transform', function (d, i) {
				// return 'translate(0,' + i * 30 + ')';
			// });

		// legend.append('rect')
		  // .attr('width', legendRectSize)
		  // .attr('height', legendRectSize)
		  // .style('fill', color)
		  // .style('stroke', color);

		// legend.append('text')
		  // .attr('x', legendRectSize + legendSpacing)
		  // .attr('y', legendRectSize - legendSpacing)
		  // .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
		  // .text(function (d) {
			  // return d;
		  // });
	// });
})(window.d3);