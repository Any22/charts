let xValues = ["Italy", "France", "Spain", "USA", "Argentina","Australia","Germany","Canada","Brazil"];
let yValues = [55, 49, 44, 24, 15,34,23,45,12];
let barColors = ["red","#0F52BA","#E79AFF"," #f4c20d","#fb7e84","red","skyblue","#8ab48a","#fb7e84"];
 
new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display:false},
    title: {
      display: true,
      text: "World Wine Production 2018"
    }
  }
});

new Chart("myChart1", {
  type: "pie",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: true,
      text: "World Wide Wine Production 2018"
    }
  }
});

