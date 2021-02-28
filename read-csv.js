const fs = require("fs");
const Papa = require("papaparse");
const express = require("express");
var app = express();
const file = fs.readFileSync("excel.csv", {
  encoding: "utf8",
  flag: "r",
});
const http = require("http");
var data1 = [];
var data = [];

Papa.parse(file, {
  config: {
    header: false,
  },
  step: function (row) {
    //console.log(row.data);
    data1.push(row.data);
  },
  before: function (file, inputElem) {
    console.log("Parse file : ", file);
  },
  error: function (err, file) {
    console.log("Error:", err, file);
  },
  complete: function (results) {
    console.log("Finished.");
  },
});

const LIST = "LIST";
const MCQ = "MCQ";
const CHECKBOX = "CHECKBOX";

var i, j;

for (i = 0; i < data1.length; i++) {
  data1[i].shift();
}

titles = data1[0];
types = [LIST, CHECKBOX, MCQ];
options = [
  ["Tea", "Coffee", "Soft drinks", "Water"],
  ["Dairy milk", "Five star", "Milky bar", "Munch", "KitKat"],
  ["England", "Australia", "UAE", "Malaysia"],
];
//console.log(data1);

for (i = 0; i < data1[0].length; i++) {
  var data_obj = {};
  data_obj.Title = titles[i];
  data_obj.Type = types[i];
  data_obj.Options = options[i];
  data_obj.Responses = [];
  data.push(data_obj);
}

for (i = 1; i < data1.length; i++) {
  for (j = 0; j < data1[i].length; j++) {
    var res = [];
    res.push(data1[i][j].split(", "));
    //console.log(typeof(res[0]));
    if (j == 1) {
      data[j].Responses.push(res[0]);
    } else {
      if (res[0].length == 1) {
        data[j].Responses.push(res[0][0]);
      } else {
        data[j].Responses.push(res[0]);
      }
    }
  }
}

console.log(data);
