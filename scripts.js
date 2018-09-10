if ('serviceWorker' in navigator){
    navigator.serviceWorker.register("./sw.js")
    .then(reg => console.log("Registro OK", reg))
    .catch(err => console.warn("Registro Fail", err))
}

let sld1=document.getElementById("slider1");
let sld2=document.getElementById("slider2");
let sld3=document.getElementById("slider3");
let sld4=document.getElementById("slider4");
let sld5=document.getElementById("slider5");
let sld6=document.getElementById("slider6");
let sld7=document.getElementById("slider7");
let sld8=document.getElementById("slider8");
let txtItems=document.getElementsByClassName("txtItem");

let defaultText= "Lorem ipsum dolor sit amet consectetur Vitae odio qui magnam voluptatem.";
let in1=document.getElementById("input1");
let in2=document.getElementById("input2");
let in3=document.getElementById("input3");
let in4=document.getElementById("input4");
let in5=document.getElementById("input5");
let in6=document.getElementById("input6");
let in7=document.getElementById("input7");
let in8=document.getElementById("input8");

sld1.oninput =()=>{ChangeFontSize(0, sld1.value);};
sld2.oninput =()=>{ChangeFontSize(1, sld2.value);};
sld3.oninput =()=>{ChangeFontSize(2, sld3.value);};
sld4.oninput =()=>{ChangeFontSize(3, sld4.value);};
sld5.oninput =()=>{ChangeFontSize(4, sld5.value);};
sld6.oninput =()=>{ChangeFontSize(5, sld6.value);};
sld7.oninput =()=>{ChangeFontSize(6, sld7.value);};
sld8.oninput =()=>{ChangeFontSize(7, sld8.value);};

function ChangeFontSize (posicion, tamaño){
    txtItems[posicion].style.fontSize=`${tamaño}px`;
 }
 


in1.onkeyup=()=>{ChangeText(0, in1.value);};
in2.onkeyup=()=>{ChangeText(1, in2.value);};
in3.onkeyup=()=>{ChangeText(2, in3.value);};
in4.onkeyup=()=>{ChangeText(3, in4.value);};
in5.onkeyup=()=>{ChangeText(4, in5.value);};
in6.onkeyup=()=>{ChangeText(5, in6.value);};
in7.onkeyup=()=>{ChangeText(6, in7.value);};
in8.onkeyup=()=>{ChangeText(7, in8.value);};


function ChangeText(posicion, text){
    txtItems[posicion].innerHTML=text;
    if(text===""){
        txtItems[posicion].innerHTML=defaultText;
    }
}
