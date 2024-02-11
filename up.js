var username=document.getElementById(uname);
if(username=="admin"){
    return true;
}
else{
    document.write("invalid username");
}
var password=document.getElementById(psw);
if(password=="password"){
    return true;
}
else{
    document.write("invalid password");
}