


let car = document.getElementById("car");
let red = document.querySelector(".red");
let green = document.querySelector(".green");
let yellow = document.querySelector(".yellow");
let carForward = 10;
let timer = 0;
let carInterval;
let timerInterval;

function play(){
    carInterval = setInterval(function(){
        carForward += 1;
        car.style.left = `${carForward}px`
    }, 10)
    green.style.background = "#05fb05";

    timerInterval = setInterval(function(){
        timer += 1;
        
        if(timer > 3){
            clearInterval(carInterval);
            red.style.background = "red";
            green.style.background = "#034b03";
        }
        if(timer === 6){
            red.style.background = "#810b0b";
            yellow.style.background = "yellow";
        }
        if(timer > 7 && timer < 11){
            carInterval = setInterval(function(){
                carForward += 2;
                car.style.left = `${carForward}px`
            }, 10)
            green.style.background = "#05fb05";
            yellow.style.background = "#818106";
            red.style.background = "#810b0b";
        }

    }, 1000)
}



// window.addEventListener("keydown",function(event){

//     console.log(event.keyCode); 

//     if(event.keyCode == 39 && carForwerd < 1280){
//         car.style.left = `${carForwerd}px`
//         carForwerd += 5;
//         car.style.bottom = `80px`
//          car.style.transform = "scaleX(-1)"
//          console.log(carForwerd);
         
//     }else if(event.keyCode == 37 && carForwerd > 10){
//         car.style.left = `${carForwerd}px`
//         car.style.bottom = `120px`
//         car.style.transform = "scaleX(1)"
//         carForwerd += -5
//     }
// })

// function carGo(){
//     if(carForwerd  < 1280){
        
//    carInterval = setInterval(function(){
//     carForwerd += 5;
//     car.style.left = `${carForwerd}px`
//    }, 10)
// }else{
//     clearInterval(carInterval)
//     carInterval = setInterval(function(){
//         carForwerd -= 5;
//         car.style.left = `${carForwerd}px`
//        }, 10)
//     }
// }