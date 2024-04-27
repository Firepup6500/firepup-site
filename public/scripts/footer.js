var foot = document.createElement("footer");
foot.innerHTML = `<span class="rainbow">This website uses </span><a href="https://bookie0.repl.co" class=cyan>Bookie0's</a> <a href="https://bouncecss.bookie0.repl.co/" class=cyan>BounceCSS</a><span class="rainbow"> for styling.</span>
${location.pathname !== "/"? '<br/><a href="/" class="cyan">Return to index</a>': ''}
<br/>
<span class="rainbow">Website © 2023 Firepup650</span>
`;
document.querySelector("body").append(foot);
console.debug("Footer Script done.")
