let number=[10,20,30,40];

//for loop
document.writeln("1.For Loop <br><br>");
for(var i=0;i<number.length;i++){
    document.write(number[i]+" ");
}
document.writeln("<br><br>");

//foreach loop
document.writeln("2. foreach Loop<br><br>")
number.forEach(function(values,indexvalue,number){
    document.write("The value in the index "+indexvalue+" is "+values+"<br>");
});

//foreach loop with string values
document.writeln("<br>2. Foreach loop with the names<br><br>")
let names=["Shyam","Surya Prakash","Vincent","Sudha"];
names.forEach(function(name,indexvalue,names){
    document.write("the name in the index "+indexvalue+" is "+name+"<br>");
});

//foreach loop with the arrow function
document.writeln("<br><br>");
document.writeln("<br>2. For each loop with the  arrow function<br><br>");
names.forEach((name,indexvalue)=>{
    document.writeln("the name in the index "+indexvalue+"  is "+name+"<br>");
});


//for of loop 
document.writeln("<br><br>");
document.writeln("<br> 3. For of loop <br><br>");
for(let name of names){
    document.writeln("The name is "+name+"<br>");
}

//for in loop 
document.writeln("<br><br>");
document.writeln("<br> 3. For in loop <br><br>");
for(let index in names){
    document.writeln("The name in index "+index+" is "+names[index]+"<br>");
}

