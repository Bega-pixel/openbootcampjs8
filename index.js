trueFunction = ()=> true;
console.log(trueFunction());

promesaFunction = ()=> {
    console.log("Hola soy una promesa");
},5000;

function* numerosPares() {
    let i = 0
    while(true) {
        i += 2
        if(i === 40){
            return i
        }
        yield i
    }
}