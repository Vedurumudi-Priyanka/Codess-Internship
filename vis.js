const LIST = "LIST";
const MCQ = "MCQ";
const CHECKBOX = "CHECKBOX";

var data = [];
var titles;
const types = [LIST, CHECKBOX, MCQ];
const options = [
  ["Tea", "Coffee", "Soft drinks", "Water"],
  ["Dairy milk", "Five star", "Milky bar", "Munch", "KitKat"],
  ["England", "Australia", "UAE", "Malaysia"],
];


Chart.plugins.unregister(ChartDataLabels);




function listProcessing(listData) {
  const map = new Map();

  const options = listData.Options;
  for (let i = 0; i < options.length; i++) {
    map.set(options[i], 0);
  }

  const responses = listData.Responses;
  for (let i = 0; i < responses.length; i++) {
    map.set(responses[i], map.get(responses[i]) + 1);
  }

  const data = [[], []];
  map.forEach((value, key) => {
    data[0].push(key);
    data[1].push(value);
  });

  const div = document.getElementById("1");
  div.style.width = "50%";
  div.style.borderRadius = "10px";
  div.style.backgroundColor = "#ffffff";
  div.style.padding = "20px";
  div.style.paddingTop = "10px";
  div.style.marginBottom = "20px";
  div.style.marginTop = "20px";
  div.style.marginLeft = "25%";

  const graph = document.getElementById("Graph_beverage");
  const ctx = graph.getContext("2d");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "Graph for beverage choices",
          data: data[1],
          backgroundColor: [
            "rgba(0, 191, 255, 1)",
            "rgba(220, 20, 60, 1)",
            "rgba(55, 206, 86, 1)",
            "rgba(75, 2, 100, 1)",
            "rgba(255, 127, 80, 1)",
            "rgba(188, 143, 143, 1)",
          ],
          borderColor: [
            "rgba(0, 191, 255, 1)",
            "rgba(220, 20, 60, 1)",
            "rgba(55, 206, 86, 1)",
            "rgba(75, 2, 100, 1)",
            "rgba(255, 127, 80, 1)",
            "rgba(188, 143, 143, 1)",
          ],
          borderWidth: 1.5,
          hoverBorderColor: "#000000",
        },
      ],
    },
    options: {
      layout: {
        padding: {
          left: 5,
          right: 50,
          top: 0,
          bottom: 0,
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: listData.Title,
        position: "top",
        fontStyle: "bold",
        fontColor: "#000000",
        fontSize: 20,
        padding: 20,
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Frequency",
              fontSize: 15,
              fontColor: "#000000",
              padding: 15,
            },
            ticks: {
              stepSize: 1,
              max: Math.max(...data[1]) + 1,
              min: 0,
              fontColor: "#000000",
              fontSize: 12,
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Beverages",
              fontSize: 15,
              fontColor: "#000000",
              padding: 10,
            },
            ticks: {
              fontColor: "#000000",
              fontSize: 12,
            },
          },
        ],
      },
    },
  });

  console.log(map);
}

function checkboxProcessing(checkboxData) {
  const map = new Map();

  const options = checkboxData.Options;

  for (let i = 0; i < options.length; i++) {
    map.set(options[i], 0);
  }

  const responses = checkboxData.Responses;
  for (let i = 0; i < responses.length; i++) {
    for (let j = 0; j < responses[i].length; j++) {
      map.set(responses[i][j], map.get(responses[i][j]) + 1);
    }
  }

  var total = 0;

  const data = [[], []];
  map.forEach((value, key) => {
    data[0].push(key);
    data[1].push(value);
    total += value;
  });

  const div = document.getElementById("2");
  div.style.width = "50%";
  div.style.borderRadius = "10px";
  div.style.backgroundColor = "#ffffff";
  div.style.padding = "20px";
  div.style.paddingTop = "10px";
  div.style.marginBottom = "20px";
  div.style.marginTop = "20px";
  div.style.marginLeft = "25%";

  const graph = document.getElementById("Graph_chocolate");
  const ctx = graph.getContext("2d");
  const chart = new Chart(ctx, {
    plugins: [ChartDataLabels],
    type: "pie",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "Graph for chocolate choices",
          data: data[1],
          backgroundColor: [
            "rgba(0, 191, 255, 1)",
            "rgba(220, 20, 60, 1)",
            "rgba(55, 206, 86, 1)",
            "rgba(100, 100, 200, 1)",
            "rgba(255, 127, 80, 1)",
            "rgba(188, 143, 143, 1)",
          ],
          borderColor: [
            "rgba(0, 191, 255, 1)",
            "rgba(220, 20, 60, 1)",
            "rgba(55, 206, 86, 1)",
            "rgba(100, 100, 200, 1)",
            "rgba(255, 127, 80, 1)",
            "rgba(188, 143, 143, 1)",
          ],
          borderWidth: 1.5,
          borderAlign: "inner",
          hoverBorderColor: "#000000",
        },
      ],
    },
    options: {
      layout: {
        padding: {
          left: 25,
          right: 60,
          top: 0,
          bottom: 0,
        },
      },
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 25,
          padding: 20,
          fontColor: "#000000",
          fontSize: 12,
        },
      },
      title: {
        display: true,
        text: checkboxData.Title,
        position: "top",
        fontSize: 20,
        fontColor: "#000000",
        fontStyle: "bold",
        padding: 20,
      },
      tooltips: {
        enabled: true,
      },

      plugins: {
        datalabels: {
          color: "#000000",
          textAlign: "center",
          font: {
            lineHeight: 1.1,
          },
          formatter: function (value, ctx) {
            return (
             
              ((value / total) * 100).toPrecision(4) +
              "%"
            );
          },
        },
      },
    },
  });

  console.log(map);
}

function mcqProcessing(mcqData) {
  const map = new Map();

  const others = "Others";
  const options = mcqData.Options;

  for (let i = 0; i < options.length; i++) {
    map.set(options[i], 0);
  }
  map.set(others, 0);

  const responses = mcqData.Responses;
  for (let i = 0; i < responses.length; i++) {
    if (map.has(responses[i])) {
      map.set(responses[i], map.get(responses[i]) + 1);
    } else if (typeof responses[i] == "string") {
      
      map.set(others, map.get(others) + 1);        
    } else {
      
      map.set(others, map.get(others) + responses[i].length);
    }
  }

  const data = [[], []];
  map.forEach((value, key) => {
    data[0].push(key);
    data[1].push(value);
  });

  const div = document.getElementById("3");
  div.style.width = "50%";
  div.style.borderRadius = "10px";
  div.style.backgroundColor = "#ffffff";
  div.style.padding = "20px";
  div.style.paddingTop = "10px";
  div.style.marginBottom = "20px";
  div.style.marginTop = "20px";
  div.style.marginLeft = "25%";


  const graph = document.getElementById("Graph_vacation");
  const ctx = graph.getContext("2d");
  const chart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: data[0],
      datasets: [
        {
          label: "Graph for vacation place choices",
          data: data[1],
          backgroundColor: [
            "rgba(0, 191, 255, 1)",
            "rgba(220, 20, 60, 1)",
            "rgba(55, 206, 86, 1)",
            "rgba(75, 2, 100, 1)",
            "rgba(255, 127, 80, 1)",
            "rgba(188, 143, 143, 1)",
          ],
          borderColor: [
            "rgba(0, 191, 255, 1)",
            "rgba(220, 20, 60, 1)",
            "rgba(55, 206, 86, 1)",
            "rgba(75, 2, 100, 1)",
            "rgba(255, 127, 80, 1)",
            "rgba(188, 143, 143, 1)",
          ],
          borderWidth: 1.5,
          hoverBorderColor: "#000000",
        },
      ],
    },
    options: {
      layout: {
        padding: {
          left: 5,
          right: 60,
          top: 0,
          bottom: 0,
        },
      },
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: mcqData.Title,
        position: "top",
        fontSize: 20,
        fontStyle: "bold",
        fontColor: "#000000",
        padding: 20,
      },
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Frequency",
              fontSize: 15,
              fontColor: "#000000",
              padding: 15,
            },
            ticks: {
              stepSize: 1,
              max: Math.max(...data[1]) + 1,
              min: 0,
              fontColor: "#000000",
              fontSize: 12,
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Vacation places",
              fontSize: 15,
              fontColor: "#000000",
              padding: 10,
            },
            ticks: {
              fontColor: "#000000",
              fontSize: 12,
            },
          },
        ],
      },
    },
  });

  console.log(map);
}



function makeChart(data1) {
  var i, j;

  titles = data1.columns;
  titles.shift();     
 

  for (i = 0; i < titles.length; i++) {
    var data_obj = {};
    data_obj.Title = titles[i];
    data_obj.Type = types[i];
    data_obj.Options = options[i];
    data_obj.Responses = [];
    // console.log(data_obj);
    data.push(data_obj);
  }

  for (i = 0; i < data1.length; i++) {
    for (j = 0; j < data.length; j++) {
      var res = [];
      res.push(data1[i][titles[j]].split(", "));
      
      if (j == 1) {
        data[j].Responses.push(res[0]); // Always push the response array for CHECKBOX type
      } else {
        if (res[0].length == 1) {
          // If there is only 1 response, just push the string, no the array
          data[j].Responses.push(res[0][0]); 
        } else {
          data[j].Responses.push(res[0]); // If there are multiple responses, push the array
        }
      }
    }
  }

  console.log(data);

    data.forEach((item) => {
      switch (item.Type) {
        case LIST:
          listProcessing(item);
          break;
        case MCQ:
          mcqProcessing(item);
          break;
        case CHECKBOX:
          checkboxProcessing(item);
          break;
      }
    });
  //};
}


d3.csv("Internship form.csv", (d) => {
  makeChart(d);
});
