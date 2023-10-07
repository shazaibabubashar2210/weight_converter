let input = document.querySelector("input");
let span = document.querySelector("span");

input.addEventListener('input',function(){
    if(input.value<=0||isNaN(input.value))
    {
    setTimeout(function(){
       
            span.style.color="red";
           span.innerHTML="Please a Valid Number";
           setTimeout(function(){
               span.innerHTML="";
               input.value="";
           },5000);
    },1000);
}
else{
    setTimeout(function(){
        let kilogram=(input.value)/(2.2);
        span.style.color=" #008B8B";
        span.innerHTML=kilogram.toFixed(2) + "Kg";
    },1000);
    setTimeout(function(){
        span.innerHTML="";
        input.value="";
    },5000);
}
});