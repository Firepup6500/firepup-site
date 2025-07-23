function dLS(url) {
    var script = document.createElement("script");
    script.src = url;
    document.head.appendChild(script);
}
dLS("https://cdn.jsdelivr.net/npm/eruda@2.11.3/eruda.min.js")
dLS("/scripts/footer.js")
dLS("/scripts/pgen.js")
dLS("/scripts/eruda_loader.js")
console.info("PwdGen scripts loaded")
