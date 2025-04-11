let car = document.getElementById("car")
let carForwerd = 10;

window.addEventListener("keydown",function(event){

    console.log(event.keyCode); 

    if(event.keyCode == 39 && carForwerd < 1280){
        car.style.left = `${carForwerd}px`
        carForwerd += 5;
        car.style.bottom = `80px`
         car.style.transform = "scaleX(-1)"
         console.log(carForwerd);
         
    }else if(event.keyCode == 37 && carForwerd > 10){
        car.style.left = `${carForwerd}px`
        car.style.bottom = `120px`
        car.style.transform = "scaleX(1)"
        carForwerd += -5
    }
})
