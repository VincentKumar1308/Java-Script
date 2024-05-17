//basic arrays
document.writeln("basic Arrays <br><br>");
let names=["shiva","jeeva","vincent","sudha"];
names.forEach(function(name){
    document.writeln("The name is "+name+"<br>");
});

//inserting the values into the array
document.writeln("<br><br>");
document.write("The values after the inserting in the array is <br><br>");
names.push(true);
names.forEach((name)=>{
    document.writeln("The name is "+name+"<br>")
});

//array created by using  the 2 methods
document.writeln("<br><br>");
document.write("The Array created by using the  2nd method <br><br>");
let newArray;
newArray=["Hello",1,"vincent","sudha",true];
newArray.forEach((array)=>{
    document.writeln("The name is "+array+"<br>")
});

//array created by using the new keyword
document.writeln("<br><br>");
document.writeln("The array created by using the new keyword");
let newNames;
newNames=new Array("Vincent","Sudha",1,true);
newNames.forEach((name)=>{
    document.writeln("The name is "+name+"<br>");
});