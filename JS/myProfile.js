/**
 * Created by sravyakalva on 9/18/16.
 */

//Creates new rows for users to add
function addRow(){
	var table = document.getElementById("myData");

	//Adds below the title
	var row = table.insertRow(1);

	//Creates cells within the row
	var foodCell = row.insertCell(0);
	var priceCell = row.insertCell(1);
	var quantityCell = row.insertCell(2);
	var storeCell = row.insertCell(3);

	//Creates empty slots
	var a = document.createElement("INPUT");
	var b = document.createElement("INPUT");
	b.setAttribute("type","number");

	var c = document.createElement("INPUT");
	c.setAttribute("type","number");
	c.setAttribute("class","num");


	var d = document.createElement("INPUT");

	//Adds the input to the cell
	foodCell.appendChild(a);
	priceCell.appendChild(b);
	quantityCell.appendChild(c);
	storeCell.appendChild(d);
};

//Deletes last made row
function deleteRow(){
	var table = document.getElementById("myData");

	//Deletes the last row added
	table.deleteRow(table.rows.length - 1);

};
