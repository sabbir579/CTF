function CalculatShow(){
    var CelsiusValue=document.getElementById("Celsius").value ;
    var ReusltShow=document.getElementById("ReusltShow");
    var Fahrenheit=calculateF(CelsiusValue);
    ReusltShow.innerText=`${CelsiusValue}°C=${Fahrenheit}°F`;
}
function calculateF(C){
    return C*1.8+32;
}
function ClearShow(){
   var CelsiusValue=document.getElementById("Celsius");
   CelsiusValue.value="";
   var ReusltShow=document.getElementById("ReusltShow");
   ReusltShow.innerText="";
}
function CalculatShow2(){
    var FahrenheitValue=document.getElementById("Fahrenheit").value ;
    var ReusltShow2=document.getElementById("ReusltShow2");
    var Celsius=CalculatC(FahrenheitValue)
    ReusltShow2.innerText=`${FahrenheitValue}°F=${Celsius}°C`;
}
function CalculatC(F){
    return (F-32)*5/9;
}
function ClearShow2(){
    var FahrenheitValue=document.getElementById("Fahrenheit")
    FahrenheitValue.value="";
    var ReusltShow2=document.getElementById("ReusltShow2");
   ReusltShow2.innerText="";
}
function FtC(){
    let displayChange=document.getElementById("displayChange");
    let displayChange2=document.getElementById("displayChange2");
    displayChange.style.display="none";
    displayChange2.style.display="block";
}
function CtF(){
    let displayChange=document.getElementById("displayChange");
    let displayChange2=document.getElementById("displayChange2");
    displayChange.style.display="block";
    displayChange2.style.display="none"; 
}