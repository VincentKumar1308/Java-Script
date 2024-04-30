function OnClickByUser(){
     var str= document.getElementById("Male");
     var str1= document.getElementById("Female");
     if(str.checked==true){
        alert("Your Gender is : "+str.value);
     }
     else if(str1.checked==true){
        alert("Your Gender is : "+str1.value);
     }
     else{
        alert("NO gender is selectd");
     }

}