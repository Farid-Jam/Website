let x = 0;

document.getElementById("decrease").onclick = function(){
    x = Number(x);
    x--;
    document.getElementById("count").textContent = x;
}
document.getElementById("increase").onclick = function(){
    x = Number(x);
    x++;
    document.getElementById("count").textContent = x;
}
document.getElementById("reset").onclick = function(){
    x = Number(x);
    x = 0;
    document.getElementById("count").textContent = x;
}
