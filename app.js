//function buildMetadata(sample) {

  // @TODO: Complete the following function that builds the metadata panel

  // Use `d3.json` to fetch the metadata for a sample
    // Use d3 to select the panel with id of `#sample-metadata`

    // Use `.html("") to clear any existing metadata

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.

    // BONUS: Build the Gauge Chart
    // buildGauge(data.WFREQ);
//}

const url ="/Datasets/belly_button_metadata"
// what is the actual URL?
// where do this go    .html("")

function buildMetadata(sample) {d3.json(url).html("").then(function(response) {
  console.log(response);


});
  
}


function buildCharts(sample) {

  // @TODO: Use `d3.json` to fetch the sample data for the plots
    const url2 = "/Datasets/belly_button_data"
    // @TODO: Build a Bubble Chart using the sample data

    // @TODO: Build a Pie Chart
    // HINT: You will need to use slice() to grab the top 10 sample_values,
    // otu_ids, and labels (10 each).
    
    d3.json(url2).then(function(response) {
     //i need to go back and figure out how to slice top 10
      var sample_values = belly_button_data.slice(10))
     
      var trace = {
        type: "pie",
        labels: sample_values.otu_label,
        values: " "
      };
      
      var data = [trace];

      var layout = {
        title: "Belly Button Graph"
        
      };
  
      Plotly.newPlot("plot", data, layout);
  });
}

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
