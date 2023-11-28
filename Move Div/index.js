var move = document.querySelector('.move');
move.addEventListener('mousedown',mousedown);

function mousedown(){
move.addEventListener('mousemove',mousemove);
move.addEventListener('mouseup',mouseup);

function mousemove(e){
var x = e.clientX - 75 +'px';
var y = e.clientY - 75 +'px';
this.style.left = x;
this.style.top = y;
this.style.background = 'red';
}

function mouseup(){
    move.removeEventListener('mousemove',mousemove)
    this.style.background = 'black';
}
}