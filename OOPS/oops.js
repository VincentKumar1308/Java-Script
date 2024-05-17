//direct creation  of the object

document.write("Direct creation of the object <br><br>");
document.write("{} represents the object <br><br>");
var names={
    name:"vincent",
    age:23,
    sports:"handball",
    interest:"playing"
}

document.write("Name : "+names.name+"<br>Age : "+names.age+"<br>Sports : "+names.sports+"<br>Interest : "+names.interest);


//creation of the objects with  the  classes

document.write("<br><br><br>creation of the multiple objects with the function or Constructor function");
function multipleObject(name,age,sports,interest){
    this.name=name,
    this.age=age,
    this.sports=sports,
    this.interest=interest
}

var Obj1=new multipleObject("vincent",25,"handball","playing");
document.writeln("<br>Name: "+Obj1.name+"<br>Age : "+Obj1.age+"<br>Sports : "+Obj1.sports+"<br>Interest : "+Obj1.interest);

