let links = document.querySelectorAll("li a");
links.forEach((e) => {
    console.log(e);
    for (let i = 4; i > 0; i--) {
        let spn = document.createElement("span");
        spn.style.setProperty("--i", i);
        e.append(spn);
    }
})
console.log(links);