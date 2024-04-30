function validation(){
    var user_name=document.getElementById("uname");
    var password=document.getElementById("pass");

    if(user_name.value.trim()=="" || password.value.trim()==""){
        alert("No blank values are allowed");
        return false;
    }
    else{
        return true;
    }
}