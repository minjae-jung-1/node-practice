var socket;

function setup() {
    createCanvas(600,400);
    background(51);

    socket = io.connect('http://localhost:3000')
    socket.on('mouse', newDrawing);
}

function mouseDragged() {
    console.log('Sending' + mouseX + "," + mouseY);

    var data = {
        x: mouseX,
        y: mouseY
    }

    socket.emit('mouse' , data);

    noStroke();
    fill(255);
    ellipse(mouseX, mouseY, 36,36);
}



function newDrawing(data) {
    noStroke();
    fill(255 , 0 , 100);
    ellipse(data.x, data.y, 36,36);
}

function draw(){

}


// the sketch will be able to not only receive data but 
// send data as well.  newDrawing receives data from node
//while mouse dragged creates a data object and sends it to node