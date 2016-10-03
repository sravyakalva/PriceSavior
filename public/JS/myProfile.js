/**
 * Created by sravyakalva on 9/18/16.
 */

//Creates new rows for users to add
function addRow(){

	var table = document.getElementById("myData");
	historyBack();
	//Adds below the title
	var row = table.insertRow(1);

	//Creates cells within the row
	var foodCell = row.insertCell(0);
	var priceCell = row.insertCell(1);
	var quantityCell = row.insertCell(2);
	var storeCell = row.insertCell(3);

	//Creates empty slots
	var a = document.createElement("select");
	a.setAttribute("id", "Food");
	a.innerHTML='<option>Apples</option><option>Orange</option><option>Kiwi</option>';

	a.setAttribute("onchange","calculateFields()");
	var b = document.createElement("INPUT");
	b.setAttribute("type","number");
	b.setAttribute("class","Prices");

	var c = document.createElement("INPUT");
	c.setAttribute("type","number");
	c.setAttribute("class","Quantity");


	var d = document.createElement("INPUT");
	d.setAttribute("class","Store");

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
function historyBack() {
	history.pushState(null,null,null);
}
//dummy data
var Storeprices=
{
	'Walmart':
	{'Apple':0.20, 'Orange':0.10, 'Bread':3.40, 'Banana':0.10, 'Kiwi':0.89},
	'Shoppers':
	{'Apple':0.10, 'Orange':0.19, 'Bread':3.10, 'Banana':0.20, 'Kiwi':0.99},
	'Costco':
	{'Apple':0.33, 'Orange':0.39, 'Bread':3.00, 'Banana':0.10}
};

function calculateFields()
{
	var nameOfFood=$('#Apple').value;
	console.log(nameOfFood);

}
//Searches the name, unbrandname, or branded name of the item and displays the image and the description

$(document).ready(function (){
	//var search=document.getElementById('search').value;
	//console.log(search);
	$.getJSON('http://api.shopstyle.com/api/v2/products?pid=uid3824-35982732-83&offset=0&limit=50',function(ssResults) {
		for (i=0;i< ssResults.products.length;i++)
		{
			console.log(ssResults.products[i].categories[0].id);
			var categories=ssResults.products[i].categories[0].id;
			$('<li class="list-group-item"></li>').text(categories).attr("id",categories).appendTo("#Categories");
		}

		//console.log((ssResults.products[i].image.sizes.Medium.url));
		/*if((ssResults.products[i].name)==search || (ssResults.products[i].brandedName)==search ||(ssResults.products[i].unbrandedName)==search
		 || (ssResults.products[i].categories[0].id)==search )
		 {
		 var src=ssResults.products[i].image.sizes.Medium.url;
		 var img=$('<img />',{
		 id:search,
		 src:src
		 });
		 img.appendTo($('#img'));
		 //$('<br/>').appendTo(img);
		 $('<p>').appendTo($('#img')).html(ssResults.products[i].description);
		 $('<p>').appendTo($('#img')).html(ssResults.products[i].priceLabel);

		 } */

	});




});