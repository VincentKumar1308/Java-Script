function CallByTagElement(){
    var para=document.getElementsByTagName("p");
    for (var i=0;i<para.length;i++){
       para[i].style.backgroundColor="orangered";
       para[i].style.color="white";
       para[i].style.fontWeight="bold";
    }
}