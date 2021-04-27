function validForm(){
    var x=document.forms["myForm"]["tname"].value;
    var y=document.forms["myForm"]["ename"].value;
    var z=document.forms["myForm"]["pname"].value;
    var a=document.forms["myForm"]["cpname"].value;
if(x==""){
    alert("Name should not be empty");
    return false;
}
if(y==""){
    alert("Email should not be empty");
    return false;
}
if(z==""){
    alert("password should not be empty");
    return false;
}
if(z.length<6){
    alert("password must contain above seven letters");
    return false;
}
if(z==a){
   return true
}
else{
  alert("password and confirm password must be same");
  return false;
}
}