<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Document</title>
</head>
<body>
<h1>spoural form detail</h1>
<table id="t"></table>
<button id="show" >show</button>
<style> table,tr,td{
border: 2px solid rgb(0, 0, 0);
} </style>
<script>
let srui = {
name: "Bhargav",
branch: "IT",
id: "21IT137",
sem: '4th',
}
let tbl = document.getElementById("t");
function Bhargav() {
Object.entries(srui).forEach(([key, value]) => {
var tr = document.createElement('tr');
var td = document.createElement('td');
td.innerHTML = key;
tr.appendChild(td);
tbl.appendChild(tr);
td = document.createElement('td');
td.innerHTML = value;
tr.appendChild(td);
tbl.appendChild(tr);
});
}
let btn = document.getElementById('show');
btn.onclick = () => {
Bhargav()
}
</script>
</body>
</html>
