const submitDeJos = document.querySelector(".submit");
const timer = document.querySelectorAll(".da");
let days = Number(timer[0].innerHTML);
let hours = Number(timer[1].innerHTML);
let minutes = Number(timer[2].innerHTML);
let seconds = Number(timer[3].innerHTML);

submitDeJos.addEventListener("click", (event) => {
  event.preventDefault();
});
 const clock = (i) => {
    timer[i].innerHTML =  +timer[i].innerHTML - 1
     switch (i) {
         case 3:
            if(+timer[i].innerHTML === 0){
                timer[i].innerHTML = 60;
                clock(i-1);
            }
            setTimeout(() => {
                clock(i);
            }, 1000) 
         break;
        case 2:
            if(+timer[i].innerHTML === 0){
                timer[i].innerHTML = 60;
                clock(i-1);
            }
            clock(i + 1);
            break;
        case 1:
            if(+timer[i].innerHTML === 24){
                timer[i].innerHTML = 1;
                clock(i-1);
            }
            clock(i + 2);
             break;
        case 0:
            if(+timer[i].innerHTML <= 0){
                return;
            }
             break;
         default:
             console.log("Nu am valaorea")
             break;
     }
 }
 clock(3);

