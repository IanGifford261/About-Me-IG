'use strict';
var score = 0;

function questionOne(){
    var answercar = prompt('Do I like cars? Please answer Yes or No').toUpperCase();   
        console.log (answercar);
        

        if (answercar === ('YES') || answercar === ('Y')) {
            alert('Yay! Thats right! Im learning to code to feed that passion');
            score++;
        } else {
            if (answercar === ('NO') || answercar === ('N'))
            alert('Whoops! Nope thats wrong. I absolutely LOVE cars')
        }
}
questionOne();

function questionTwo(){
    var seattle = prompt('Am I a Seattle native? Yes or No.').toUpperCase();
        console.log (seattle);

        if (seattle === ('YES') || seattle === ('Y')) {
            alert('Nope! unfortunately I am not. I wish I was')
        } else {
            if (seattle === ('NO') || seattle === ('N'))
            alert('You are correct, I dreamed of living here for years and finally made it happen New Years of 2019')
            score++;
        }
    }
questionTwo();

var age = prompt('Am I seventeen years old? Yes or No.').toUpperCase();
    console.log (age);

    if (age === ('YES') || age === ('Y')) {
        alert('NO haha, I dont know many seventeen year olds with a beard')
    } else {
        if (age === ('NO') || age === ('N'))
        alert('Good guess. I am definitly not seventeen')
        score++;
    }

var water = prompt('Do you think I am allergic to water? Yes or No.').toUpperCase();
    console.log (water);

    if (water === ('YES') || water === ('Y')) {
        alert('Nooooo, I dont think that I know of many people that are haha. That would suck')
    } else {
        if (water === ('NO') || water === ('N'))
        alert('Correct! I am not. Imagine how awful would it be to live in a rainy place and be allergic to water!')
        score++;
    }

var narnia = prompt('Am I from Narnia? Yes or No.').toUpperCase();
    console.log (narnia);

    if (narnia === ('YES') || narnia === ('Y')){
        alert('YES! haha nahhhh im just kidding... Im not... would be cool though!')
    } else {
        if (narnia === ('NO') || narnia === ('N'))
        alert('Yeah... sadface... Youre correct. Sadly')
        score++;
    }

    
    
    for(var i = 4; i > 0; i--) {

    var carsOwned = prompt('How many cars do I own? You have 4 guesses!');
        console.log(i);
        console.log(carsOwned);
        
        carsOwned = parseInt(carsOwned)

        if(carsOwned === 7) {
            alert('Spot on!');
            i = 0;
            score++;
    } else if(carsOwned < 7){
            alert('Too Low');
    } else if(carsOwned > 7) {
            alert('Too High!')
    }
}

var carsFav = ['nissan', 'toyota', 'bmw']

for (var x = 6; x > 0 ; x--) {
   var brands = prompt('What are three of my favorite car brands? You have 6 attempts. A hint, I mentioned them before on my page').toLowerCase();
   console.log('car brands', brands);

   if (brands === carsFav[0]) {
       alert('That is correct!') 
       x=0;
       score++;
   }
   if (brands === carsFav[1]) {
       alert('That is correct!') 
       x=0;
       score++
   }
   if (brands === carsFav[2]) {
       alert('That is correct!')
       x=0;
       score++;
   }
   else {
       alert('Try Again.')
   }
    if (x < 1) {
        alert('my top three brands are nissan, toyota, and bmw.')
    }
}

    alert('Your score is ' + score + ' ,good job')