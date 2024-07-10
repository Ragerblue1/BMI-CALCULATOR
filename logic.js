let button=document.getElementById("btn1");
button.addEventListener('click',()=>{
    let  height=(document.getElementById("height").value);
    let  weight=(document.getElementById('weight').value);
    let result=document.getElementById('output')
    let height_status=false;
    let weight_status=false;
    if(height=="" || height<=0 || isNaN(height)){
        document.getElementById('height_error').innerHTML='please provide valid height'
    }else{
        document.getElementById('height_error').innerHTML='';
        height_status=true;
    }
    if(weight=="" || weight<=0 || isNaN(height)){
        document.getElementById('weight_error').innerHTML='please provide valid weight'
    }else{
        document.getElementById('weight_error').innerHTML='';
        weight_status=true;
}

if(height_status && weight_status){
    const bmi=(weight/((height*height)/10000)).toFixed(2);
if(bmi<18.6){
    result.innerHTML='underweight :'+ bmi;
}
else if(bmi>=18.6 && bmi<24.6){
    result.innerHTML='Normal :' + bmi;
}
else{
    result.innerHTML='Overweight :' +bmi;
}

}
else{
    alert("form has errors");

}
});