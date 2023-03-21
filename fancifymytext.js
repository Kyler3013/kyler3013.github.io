function makeBigger(){
    document.getElementById("input-text").style.fontSize = "4em";
}

function makeFancy(){
    document.getElementById("input-text").style.fontWeight = "bold";
    document.getElementById("input-text").style.color = "blue";
    document.getElementById("input-text").style.textDecoration = "underline";
}

function makeBoring(){
    document.getElementById("input-text").style.fontWeight = "normal";
    document.getElementById("input-text").style.color = "black";
    document.getElementById("input-text").style.textDecoration = "none";
}

function makeMoo(){
    var str = document.getElementById("input-text").value;
    var parts = str.split(".");
    document.getElementById("input-text").value = parts.join("-Moo. ");
}