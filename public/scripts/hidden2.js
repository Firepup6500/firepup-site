function dLS(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}
dLS("/scripts/hidden.js")
dLS("/scripts/footer.js")
dLS("/scripts/poof.js")
console.log("Hidden scripts loaded")
