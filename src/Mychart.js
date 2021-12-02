import React from 'react';
import * as d3 from 'd3';

/*This component is responsivle for rendering the line graph after receiving the filtered dataset as a prop. I was not able to 
fully implement this and it contains some unfixed bugs.
*/


class Mychart extends React.Component {
    state={
        info: []
    }
    componentDidMount() {

    this.setState({info: this.props.input});
    
    }

    render(){
        
   // set the dimensions and margins of the graph
const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

//Read the data
d3.csv(`${this.props.input}`,

  // When reading the csv, I must format variables:
  function(d){
    return { g_j_consumption : d.g_j_consumption, year : d.year }
  }).then(

  // Now I can use this dataset:
  function(data) {

    // Add X axis --> it is a date format
    const x = d3.scaleTime()
      .domain(d3.extent(data, function(d) { return d.g_j_consumption; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(d3.axisBottom(x));

    // Add Y axis
    const y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.year; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y));

    // Add the line
    svg.append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-width", 1.5)
      .attr("d", d3.line()
        .x(function(d) { return x(d.g_j_consumption) })
        .y(function(d) { return y(d.year) })
        )

})
      return(  
      <div>
               <div id="my_dataviz"></div>
               
            <img src={this.state.info} alt='n' />
        </div>)
    }
}

export default Mychart;