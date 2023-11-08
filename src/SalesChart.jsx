import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SalesChart = ({ data }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Create chart elements based on data
    const bars = svg.selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('x', (d, i) => i * 20)
      .attr('y', (d) => d.sales)
      .attr('width', 15)
      .attr('height', (d) => d.sales)
      .attr('fill', 'steelblue');

    // Add labels for each bar
    const labels = svg.selectAll('text')
      .data(data)
      .enter()
      .append('text')
      .attr('x', (d, i) => i * 20 + 7.5)
      .attr('y', (d) => d.sales + 10)
      .text((d) => `$${d.sales}`);
  }, [data]);

  return <svg ref={svgRef} width={400} height={200} />;
};

export default SalesChart;
