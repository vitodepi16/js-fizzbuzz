// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

/* <div class="square">
<div class="squareitem">
    
</div>

</div> */
const numSquare = 100;

const boxsquare = document.getElementById('boxsquare');
    

for (let i = 1; i <= numSquare; i++){
 


if ((i % 3 === 0) && (i % 5 === 0)){
    
     boxsquare.innerHTML += `
     <div class="square">
    <div class="squareitem fizzbuzz">
        <p>fizzbuzz</p>
    </div>
    
    </div> 
    `
}
    
    else if (i % 5 === 0){
    
        boxsquare.innerHTML += `
        <div class="square">
       <div class="squareitem buzz">
           <p>buzz</p>
       </div>
       
       </div> 
       `
   }
   else if (i % 3 === 0){
   boxsquare.innerHTML += `
        <div class="square">
       <div class="squareitem fizz">
           <p>fizz</p>
       </div>
       
       </div> 
       `
   }
     else{
       boxsquare.innerHTML +=  ` <div class="square">
       <div class="squareitem">
           ${i}
       </div>
       
       </div>
       `
       }

 }


