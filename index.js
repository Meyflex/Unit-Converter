
function convert(){
    if(document.getElementById("input_val").value!=""){
    let variable=document.getElementById("input_val").value;
   
   document.getElementById("lengh").innerHTML=variable +" meters = "+ (variable*3.281).toFixed(3)+" feet | "+variable +" feet = "+(variable/3.281).toFixed(3) +" meters";
   document.getElementById("volume").innerHTML=variable +" liters = "+ (variable*0.264).toFixed(3)+" gallons | "+variable +" gallons = "+(variable/0.264).toFixed(3) +" liters";
   document.getElementById("Mass").innerHTML=variable +" kilos = "+ (variable*2.204).toFixed(3)+" pounds | "+variable +" pounds = "+(variable/2.204).toFixed(3) +" kilos";
    }else{
        alert("Please enter a value");
    }
}
