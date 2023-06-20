function pintar(color = 'green') {
    const ele = document.getElementById("ele1");
    ele.style.backgroundColor = color;
}

const ele = document.getElementById("ele1");
ele.addEventListener("click", function() {
    pintar('yellow');
});
