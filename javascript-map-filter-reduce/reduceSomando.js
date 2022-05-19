function somaNumeros(arr){
    return arr.reduce(function(prev, current){
        console.log({ prev }); //Previous é também conhecido como "ACUMULADOR".
        console.log({ current });
        return prev + current;
    }, 0);
}

const arr = [103,3];

console.log(somaNumeros(arr));