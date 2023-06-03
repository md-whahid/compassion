const navBar = document.getElementById("navba-btn");

function hideMenu() {
	navBar.style.right = "-1000px";
	navBar.style.display = "none";
}
function showMenu() {
	navBar.style.right = "0";
	navBar.style.display = "block";
}
