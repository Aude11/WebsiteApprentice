document.addEventListener("DOMContentLoaded", () => {
    var now = new Date();
    document.getElementById("datetime").innerHTML = now.getFullYear();
});

function getFe() {
    let frontEnd = "<ul><li>HTML/CSS</li><li>React</li><li>JavaScript</li></ul>";
    document.getElementById("skill1").innerHTML = frontEnd;
    document.getElementById("remove1").remove();
    document.getElementById("button-skill-FE").remove();
}

function getBe() {
    const backEnd = "<ul><li>Java</li><li>Python</li><li>Node.Js</li></ul>";
    document.getElementById("skill2").innerHTML = backEnd;
    document.getElementById("remove2").remove();
    document.getElementById("button-skill-BE").remove();
}

function getTool() {
    const tool1 = "<ul><li>Git</li><li>Docker</li></ul>";
    const tool2 = "<ul><li>Redis</li><li>Postgres</li><li>Git</li></ul>";
    const tool3 = "<ul><li>Git</li><li>Postgres</li><li>Docker</li></ul>";
    var randomNumber = Math.floor(3 * (Math.random()));
    var tools = [tool1, tool2, tool3];
    document.getElementById("skill3").innerHTML = tools[randomNumber];
    document.getElementById("remove3").remove();
    document.getElementById("button-skill-Tool").remove();
}

function getCat() {
    let randomNumberCat = Math.floor(10 * (Math.random())) + 1;
    fetch('https://cute-cat-avatars.fly.dev/api/v1/' + randomNumberCat)
        .then(function(response) {
            document.getElementById('cat').src = response.url;
        });
}