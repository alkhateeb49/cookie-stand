'use strict';
var hourArray= ["6am","7am","8am","9am","10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"];
var dayTotal=[];
var allTotal=0;
for (var i = 0; i < hourArray.length; i++) {
  dayTotal[i]=0;
}
function Locations(name,max,min,avg){
  this.name=name;
  this.max=max;
  this.min=min;
  this.avg=avg;
  this.cookiesHourArray=[];
  this.total=0;
}
Locations.prototype.genaretCustomer=function(){
  return Math.floor(Math.random() * (this.max - this.min) + this.min);
};
Locations.prototype.cookiesArray=function(){
  for(var i =0;i<hourArray.length; i++){
    var multi =Math.floor( this.avg * this.genaretCustomer());
    this.cookiesHourArray[i]=multi;
    this.total = this.total + multi;
  }
};
Locations.prototype.renderSales=function(){
  var perant = document.getElementById('container');
  var h2 = document.createElement('h2');
  h2.textContent = this.name;
  perant.appendChild(h2);
  var unorder = document.createElement('ul');
  perant.appendChild(unorder);
  for(var c = 0 ;c < this.cookiesHourArray.length;c++){
    var listItem = document.createElement('li');
    listItem.textContent = this.cookiesHourArray[c];
    unorder.appendChild(listItem);
  }
  listItem = document.createElement('li');
  listItem.textContent = 'Total cookies : '+this.total;
  unorder.appendChild(listItem);
};

Locations.prototype.renderSalesTable=function(){
  var perant = document.getElementById("container");
  var table = document.getElementById("tableSales");
  perant.appendChild(table);
  var tableFirstRow = document.createElement('tr');
  table.appendChild(tableFirstRow);
  var tableData = document.createElement('td');
  tableData.textContent = this.name;
  tableFirstRow.appendChild(tableData);
  for (var i = 0; i <this.cookiesHourArray.length; i++) {
    tableData = document.createElement('td');
    tableData.textContent = this.cookiesHourArray[i];
    tableFirstRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = this.total;
  tableFirstRow.appendChild(tableData);
  for (var i = 0; i < hourArray.length; i++) {
    dayTotal[i]=dayTotal[i]+this.cookiesHourArray[i];
  }
  allTotal=allTotal+this.total;
};

function renderHeadSales(){
  var perant = document.getElementById("container");
  var table = document.createElement("table");
  table.setAttribute('id','tableSales');
  perant.appendChild(table);
  var tableFirstRow = document.createElement('tr');
  table.appendChild(tableFirstRow);
  var headerOne = document.createElement('th');
  headerOne.textContent = '';
  tableFirstRow.appendChild(headerOne);
  for (var i = 0; i < hourArray.length; i++) {
    headerOne = document.createElement('th');
    headerOne.textContent = hourArray[i];
    tableFirstRow.appendChild(headerOne);
  }
  headerOne = document.createElement('th');
  headerOne.textContent = 'Daily Location Total';
  tableFirstRow.appendChild(headerOne);
  
}
function  renderFootSales(){
  var perant = document.getElementById("container");
  var table = document.getElementById("tableSales");
  perant.appendChild(table);
  var tableFirstRow = document.createElement('tr');
  tableFirstRow.setAttribute('id','last');
  table.appendChild(tableFirstRow);
  var tableData = document.createElement('td');
  tableData.textContent = 'Total : ';
  tableFirstRow.appendChild(tableData);
  for (var i = 0; i < hourArray.length; i++) {
    tableData = document.createElement('td');
    tableData.textContent = dayTotal[i];
    tableFirstRow.appendChild(tableData);
  }
  tableData = document.createElement('td');
  tableData.textContent = allTotal;
  tableFirstRow.appendChild(tableData);
}







var hourlyCustomersSeattle = new Locations('Seatle',65,23,6.3);
hourlyCustomersSeattle.cookiesArray();

var hourlyCustomersTokyo = new Locations('Tokyo',3,24,1.2);
hourlyCustomersTokyo.cookiesArray();

var hourlyCustomersDubai = new Locations('Dubai',11,38,3.7);
hourlyCustomersDubai.cookiesArray();

var hourlyCustomersParis = new Locations('Paris',20,38,2.3);
hourlyCustomersParis.cookiesArray();

var hourlyCustomersLima = new Locations('Lima',2,16,4.6);
hourlyCustomersLima.cookiesArray();



renderHeadSales();
hourlyCustomersSeattle.renderSalesTable();
hourlyCustomersTokyo.renderSalesTable();
hourlyCustomersDubai.renderSalesTable();
hourlyCustomersParis.renderSalesTable();
hourlyCustomersLima.renderSalesTable();
renderFootSales();


var salesForm = document.getElementById('salesForm');
salesForm.addEventListener('submit', function (event){
  
  var last=document.getElementById('last');
  last.remove();
  event.preventDefault();
  var location = event.target.location.value;
  var max = event.target.max.value;
  var min = event.target.min.value;
  var avg = event.target.avg.value;

  var newLocation = new Locations(location,max,min,avg);
  newLocation.cookiesArray();
  newLocation.renderSalesTable();
  renderFootSales();




});













// hourlyCustomersSeattle.renderSales();
// hourlyCustomersTokyo.renderSales();
// hourlyCustomersDubai.renderSales();
// hourlyCustomersParis.renderSales();
// hourlyCustomersLima.renderSales();











// var hourlyCustomersSeattle = {
//   name:"Seatle",
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   random :0,
//   total:0,
//   cookiesHourArray:[],
//   genaretCustomer: function(){
//     this.random =  Math.floor(Math.random() * (this.max - this.min) + this.min);
//   }
// };




// var hourlyCustomersTokyo = {
//   name:"Tokyo",
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   random :0,
//   total:0,
//   cookiesHourArray:[],
//   genaretCustomer: function(){
//     this.random =  Math.floor(Math.random() * (this.max - this.min) + this.min);
//   }
// };




// var hourlyCustomersDubai = {
//   name:"Dubai",
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   random :0,
//   total:0,
//   cookiesHourArray:[],
//   genaretCustomer: function(){
//     this.random =  Math.floor(Math.random() * (this.max - this.min) + this.min);
//   }
// };





// var hourlyCustomersParis = {
//   name:"Paris",
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   random :0,
//   cookiesHourArray:[],
//   total:0,
//   genaretCustomer: function(){
//     this.random =  Math.floor(Math.random() * (this.max - this.min) + this.min);
//   }
// };

// var hourlyCustomersLima = {
//   name:"Lima",
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   cookiesHourArray:[],
//   random :0,
//   total:0,
//   genaretCustomer: function(){
//     this.random = Math.floor(Math.random() * (this.max - this.min) + this.min);
//   }
// };


// var locaion = [hourlyCustomersSeattle ,hourlyCustomersTokyo ,hourlyCustomersDubai ,hourlyCustomersParis ,hourlyCustomersLima];
// for(var j= 0 ;j<locaion.length; j++){
//   for(var i =0;i<hourArray.length; i++){
//     locaion[j].genaretCustomer();
//     var multi =Math.floor( locaion[j].avg * locaion[j].random);
//     locaion[j].cookiesHourArray[i]=hourArray[i]+": "+ multi+" cookies";
//     locaion[j].total = locaion[j].total + multi;
//   }
//   locaion[j].cookiesHourArray.push("Total : "+ locaion[j].total+" cookies");
//   // console.log(locaion[j]);
// }
// var perant = document.getElementById("container");
// for(var k =0; k<locaion.length;k++){
//   var h2 = document.createElement('h2');
//   h2.textContent = locaion[k].name;
//   perant.appendChild(h2);
//   var unorder = document.createElement('ul');
//   perant.appendChild(unorder);
//   for(var c = 0 ;c < locaion[k].cookiesHourArray.length;c++){
//     var listItem = document.createElement('li');
//     listItem.textContent = locaion[k].cookiesHourArray[c];
//     unorder.appendChild(listItem);
//   }
// }
