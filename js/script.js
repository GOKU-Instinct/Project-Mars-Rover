var r = 20, c = 40;

function makebase() {
	var grid = "<table>";
	for(var i = 0; i < r; i++) {
		grid += "<tr>";
		for(var j = 0; j < c; j++) {
			grid += "<td></td>";
		}
		grid += "</tr>";
	}
	grid += "</table";
	return grid;
}

document.querySelector("#base").innerHTML = makebase();
