// from data.js
var tableData = data;

var tbody = d3.select("tbody");
console.log(data);


//

// From Data.js 
data.forEach(function(Data_js) {
   console.log(Data_js);
   var row = tbody.append("tr");
   Object.entries(Data_js).forEach(function([key, value]) {
     console.log(key, value);
     var cell = row.append("td");
     cell.text(value);
   });
 });

