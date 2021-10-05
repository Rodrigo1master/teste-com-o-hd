//testando o script
console.log('testando');


function CreatCircle(radius) {
 return {
     radius,
     draw() {
         console.log ('draw');
     }
 };
}

//constructor function

function Circle(radius) {
this.radius = radius;
this.draw = function() {
    console.log('draw')
 }
}

const cirecle = new Circle(1);
