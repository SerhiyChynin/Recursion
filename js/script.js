let a = 0;

function rec() {
    a = a + 2;
    console.log(a);
    if (a > 99) {
        return a;
    }
     rec();
}
 
rec();

let offset = 0;
function move() {
     offset = offset + 5;
    document.querySelector('.test2').style.left = offset + 'px';
    if (offset > 200) {
        return true;
    }
    setTimeout(move, 500);
    // move();
}

document.querySelector('button').onclick = move;


// home work

let b = 100;
function left() {
    b = b - 1;
    console.log(b);
    if (b > 1) {
        return "hello";
    }
    
    left();
}
left();

function moveLeft() {
    offset = offset + 10;
    document.querySelector('.out').style.top = offset + 'px';
    document.querySelector('.out').style.right = offset + 'px';
    document.querySelector('.out').style.width = offset + 'px';
    document.querySelector('.out').style.borderRadius = offset + '%';
    if (offset > 200) {
        return true;
    }
    setTimeout(moveLeft, 400);
}
document.querySelector('.btn').onclick = moveLeft;

