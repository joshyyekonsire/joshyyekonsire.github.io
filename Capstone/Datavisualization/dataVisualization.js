var xyValues = [
    {x:50, y:7},
    {x:55, y:8},
    {x:70, y:8},
    {x:80, y:9},
    {x:90, y:9},
    {x:100, y:9},
    {x:110, y:10},
    {x:120, y:11},
    {x:130, y:14},
    {x:140, y:14},
    {x:150, y:15}
  ];
  
  new Chart("myChart", {
    type: "scatter",
    data: {
      datasets: [{
        pointRadius: 4,
        pointBackgroundColor: "rgb(0,0,255)",
        data: xyValues
      }]
    },
    options: {
      legend: {display: false},
      scales: {
        xAxes: [{ticks: {min: 40, max:160}}],
        yAxes: [{ticks: {min: 6, max:16}}],
      }
    }
  });

  // Bar Chart
  var barData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        backgroundColor: "rgb(255, 99, 132)",
        data: [10, 20, 30, 40, 50]
      }
    ]
  };

  new Chart("bar-chart-canvas", {
    type: "bar",
    data: barData,
    options: {
      legend: { display: false },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });

  // Pie Chart
  var pieData = {
    labels: ["Apple", "Banana", "Orange"],
    datasets: [
      {
        data: [30, 40, 30],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(255, 205, 86)", "rgb(75, 192, 192)"]
      }
    ]
  };

  new Chart("pie-chart-canvas", {
    type: "pie",
    data: pieData,
    options: {
      legend: {
        position: "right"
      }
    }
  });