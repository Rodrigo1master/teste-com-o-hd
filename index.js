
//every elements

const numbers = [1 , -2 ,3 ,4];

const itens = numbers
 .filter(n => n >= 0)
 .map (n => ({value:n}))

 console.log(itens)

