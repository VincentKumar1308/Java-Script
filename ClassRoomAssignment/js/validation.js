function validate(){

     totalcheck=true;
    //book validation
    var book=document.getElementById("book").value;
    var regx=/^([A-Za-z]{2,50}$)/
    if(!regx.test(book) ){
        var name=document.getElementById("bookerror");
        name.style.visibility="visible";
        totalcheck=false;
    }


    //email validation
    var email=document.getElementById("email").value;
    var regx=/^([a-zA-Z0-9]+)@([a-zA-Z\.-]+)([a-zA-z]{3,8}$)/
    if(!regx.test(email)){
        var name=document.getElementById("mailerror");
        name.style.visibility="visible";
        totalcheck=false;
    }

    //author name validation
    var author=document.getElementById("authorname").value;
    var regx=/^([a-zA-Z]{5,50}$)/
    if(!regx.test(author)){
        var name=document.getElementById("authorerror");
        name.style.visibility="visible";
        totalcheck=false;
    }

    //published year validation
    var year=document.getElementById("published").value;
    var regx=/^([1-2][0-9]{3}$)/
    if(!regx.test(year)){
        var name=document.getElementById("publishederror");
        name.style.visibility="visible";
    }

    //price validation
    var price=document.getElementById("price").value;
    var regx=/^([0-9\.-]{2,10})/
    if(!regx.test(price)){
        var name=document.getElementById("priceerror");
        name.style.visibility="visible";
    }
   return totalcheck;
}

//displayin the data

function displaydetails(){
    var book=document.getElementById("book").value;
    document.getElementById("bookid").value=book;
}

