document.getElementById("home").addEventListener("click", () => {
	window.location.href = "Website/index.html";
});

document.getElementById("graduation").addEventListener("click", () => {
	window.location.href = "Website/certificados.html";
});

console.log(window.location)

if (window.location.pathname === "/certificados.html") {
    alert("Você pode baixar os certificados clicando sobre a imagem")
}