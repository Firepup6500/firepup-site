function dLS(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}
dLS("/scripts/pgen.js")
dLS("/scripts/footer.js")
console.log("PwdGen scripts loaded")
