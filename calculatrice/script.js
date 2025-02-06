

const add = (num1, num2) =>  num1 + num2;


const subtract = (num1, num2) => num1 - num2;


const multiply = (num1, num2) => num1 * num2;


const divide = (num1, num2) => num1 /  num2;

let hasToRetry = false;


do{

    let num1 = prompt("1er nombre")

    let num2 = prompt("2er nombre")
    

hasToRetry = false; // Necessaire car si la boucle while s'execute, il faut l' initialiser a false...

if( isNaN(num1)  )
{

    alert("Le nombre " + num1 + " n'est pas correcte. Veuillez recommencer !");

hasToRetry = true

}

else {
    
   if ( isNaN(num2)  )
{


    alert("Le nombre " + num2 + " n'est pas correcte. Veuillez recommencer !");
    
    hasToRetry = true

}


else{


num1 = parseInt(num1)

num2 = parseInt(num2)

const operateur = prompt("Veuillez indiquer l'operateur ( +, -, *, / )")

if(operateur === '+')
{

  alert(`La somme est `+ add(num1, num2) )


}

else if(operateur === '-')
{alert(`Le soustraction est `, subtract(num1, num2))
}

else if (operateur === '*')
{alert(`La multiplication est `+ multiply(num1, num2))
}

else if(operateur === '/')
{

if(num2 === 0) {
    alert("Le diviseur ne peut pas etre nul");

    hasToRetry = true

}

else{

    alert(`La division est `+ divide(num1, num2))


}

}

else {
    
    alert( "L' operateur " + operateur +  " n'est pas correct. Veillez recommencer !")

    hasToRetry = true

}

}

}

}while( hasToRetry === true )