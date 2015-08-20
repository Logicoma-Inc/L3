(function (d3) {
	'use strict';
	/*** GLOBAL VARIABLES ***/
	var w = 210; //Global width
	var h = 210; //Global height
	var color = d3.scale.category10();
	
	var pies  = d3.selectAll("[pie-chart]");	
	
	//*** Pie Charts ***//	
	pies.each(function(d, i) {		
		d3.json(pies.attr("data-href"), function (error, json) {
			if (error) return console.warn(error);
			var data = json;
			var radius = Math.min(w, h) / 2;
			var donutWidth = 20;
			var legendRectSize = 18;
			var legendSpacing = 4;
		
			console.log(d3.select('[pie-chart]'));
			var svg = d3.select(pies.node())
			  .append('svg')
			  .attr('width', w)
			  .attr('height', h)
			  .append('g')
			  .attr('transform', 'translate(' + (w / 2) +
				',' + (h / 2) + ')');

			var arc = d3.svg.arc()
			  .innerRadius(radius - donutWidth)
			  .outerRadius(radius);

			var pie = d3.layout.pie()
			  .value(function (d) {
				  return d.value;
			  })
			  .sort(null);

			var tooltip = d3.select('[pie-chart]')
			  .append('div')
			  .attr('class', 'chart-tooltip');

			tooltip.append('div')
			  .attr('class', 'chart-label');

			tooltip.append('div')
			  .attr('class', 'count');

			tooltip.append('div')
			  .attr('class', 'percent');

			var path = svg.selectAll('path')
				.data(pie(data))
				.enter()
				.append('path')
				.attr('d', arc)
				.attr('fill', function (d, i) {
					return color(d.data.name);
				});

			path.on('mouseover', function (d) {
				var total = d3.sum(data.map(function (d) {
					return d.value;
				}));
				tooltip.select('.chart-label').html(d.data.name);
				tooltip.select('.count').html(d.data.value + '%');
				tooltip.style('display', 'block');
			});

			path.on('mouseout', function () {
				tooltip.style('display', 'none');
			});

			var legend = svg.selectAll('.legend')
				.data(color.domain())
				.enter()
				.append('g')
				.attr('class', 'legend')
				.attr('transform', function (d, i) {
					var height = legendRectSize + legendSpacing;
					var offset = height * color.domain().length / 2;
					var horz = -2 * legendRectSize;
					var vert = i * height - offset;
					return 'translate(' + horz + ',' + vert + ')';
				});

			legend.append('rect')
			  .attr('width', legendRectSize)
			  .attr('height', legendRectSize)
			  .style('fill', color)
			  .style('stroke', color);

			legend.append('text')
			  .attr('x', legendRectSize + legendSpacing)
			  .attr('y', legendRectSize - legendSpacing)
			  .text(function (d) {
				  return d;
			  });
		});	
	});	

})(window.d3);