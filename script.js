window.addEventListener('DOMContentLoaded',()=>{
var fisrtColor = document.querySelectorAll(".f-color");
var secondColor= document.querySelectorAll(".s-color");
var thirdColor = document.querySelectorAll(".t-color");
var fourthColor=document.querySelectorAll(".fourth-color");
var fifthColor=document.querySelectorAll(".fifth-color");
var message= document.querySelector(".message");
for(let i=0; i < fisrtColor.length; i++){
    fisrtColor[i].style.backgroundColor=fisrtColor[i].getAttribute("bg-color");
    fourthColor[i].style.backgroundColor=fourthColor[i].getAttribute("bg-color");
    fifthColor[i].style.backgroundColor=fifthColor[i].getAttribute("bg-color");
    thirdColor[i].style.backgroundColor=thirdColor[i].getAttribute("bg-color");
    secondColor[i].style.backgroundColor=secondColor[i].getAttribute("bg-color");

    fisrtColor[i].onclick = function() {
        document.execCommand("copy");
      }
    fisrtColor[i].addEventListener('copy',(event)=>{
        event.preventDefault();
        if (event.clipboardData) {
          event.clipboardData.setData("text/plain", fisrtColor[i].getAttribute("bg-color"));
           message.style.animationName="showAndHide";
           setTimeout(() => {
              message.removeAttribute("style");
           }, 3000);

        }
      
    });

    secondColor[i].onclick = function() {
        document.execCommand("copy");
      }
      secondColor[i].addEventListener('copy',(event)=>{
        event.preventDefault();
        if (event.clipboardData) {
          event.clipboardData.setData("text/plain", secondColor[i].getAttribute("bg-color"));
          message.style.animationName="showAndHide";
          setTimeout(() => {
             message.removeAttribute("style");
          }, 3000);
        }
      
    });

    thirdColor[i].onclick = function() {
        document.execCommand("copy");
      }
      thirdColor[i].addEventListener('copy',(event)=>{
        event.preventDefault();
        if (event.clipboardData) {
          event.clipboardData.setData("text/plain", thirdColor[i].getAttribute("bg-color"));
          message.style.animationName="showAndHide";
           setTimeout(() => {
              message.removeAttribute("style");
           }, 3000);
        }
      
    });

    fourthColor[i].onclick = function() {
        document.execCommand("copy");
      }
      fourthColor[i].addEventListener('copy',(event)=>{
        event.preventDefault();
        if (event.clipboardData) {
          event.clipboardData.setData("text/plain", fourthColor[i].getAttribute("bg-color"));
          message.style.animationName="showAndHide";
           setTimeout(() => {
              message.removeAttribute("style");
           }, 3000);
        }
      
    });

    fifthColor[i].onclick = function() {
        document.execCommand("copy");
      }
      fifthColor[i].addEventListener('copy',(event)=>{
        event.preventDefault();
        if (event.clipboardData) {
          event.clipboardData.setData("text/plain", fifthColor[i].getAttribute("bg-color"));
          message.style.animationName="showAndHide";
          setTimeout(() => {
             message.removeAttribute("style");
          }, 3000);
        }
      
    });
}
});

