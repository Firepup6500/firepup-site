var foot = document.createElement("footer");
foot.innerHTML = `${location.pathname !== "/"? '<a href="/" class="cyan">Return to index</a><br/>': ''}
<span class="rainbow">Website © 2025 Firepup650</span>
`;
document.querySelector("body").append(foot);
console.debug("Footer Script done.")
