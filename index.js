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

const circle1 = CreatCircle(1);
console.log(circle1)

const circle2 = CreatCircle(2);
console.log(circle2)
