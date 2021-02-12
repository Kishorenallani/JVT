//var keyword        var keyword           var keyword
// first method
  var a="bus";
  var  b="car";
  var c="aeroplane";
  var d=a+b+c;
  console.log(d);

  //second method
  var x=3.24;
  var y=2.63;
  var z=6.78;
  console.log(x+y+z);

  //third method
  var x="mobile" ,y="laptop", z="television"
  console.log(x,y,z);
  console.log(z);

  //addition
   var k="2"+4+5;
   console.log(k);

   //addition
   var h=2+4+"5";
   console.log(h);

//fourth method             without using var keyword
 pen=["flair","reynolds","flowline"]
 console.log(pen[0]);

//function keyword      function keyword        function keyword

//first method
function addnumbers()   //function  
{
    var a=10;
    var b=20;
    var c=30;
    console.log(a+b+c);
}
addnumbers()                //function calling


//second method
function add()        //function
{ 
    var x=4;
    var y=6; 
    var z=x+y;
    console.log(z);
    
}
add()        //function calling


//third method

function names(a,b)                     //using parameters 
{
    var c=a+b;
    console.log(c);
}
names("kishore","srikanth")  
console.log("a"+"b")         // calling a function by the strings
  
//fourth method
function addition(x,y,z)            //using parameters
{
    var total =x+y+z;
    console.log(total);

    
}
addition(6,89,98)                      //calling a function by numbers

//fifth method

function laptop(a,b) 
{
    var total=a+b;
    return total;              //using return statement
}
  var output=laptop("asus","dell");          //assigning a value to output
  console.log(output);

  
  //conversation between two members

  /*  object1           object2            variable        data
      
      kishore          venkateshsir        hellosir        hellokishore
                                           diduwrotecode    yessir
                                           howmanylines      189
                                           anyerrors         nosir
   */
  function coding() 
  {
      var hellosir="hellokishore";
      var diduwrotecode="yessir";
      var howmanylines=189;
      var anyerrors="nosir";
      console.log(anyerrors);

  }
  coding()                         //calling a function

  // by using arrays

  function coding2()        
  {

  
      var data=["hellokishore","yessir",189,"nosir"];
      console.log(data[2]);
  }
coding2()

// factorial of a number using if-else condition

function factorial(n) {
    if(n===0){

    
    return 1;
    }
    else{
        return n*factorial(n-1);

    }
    
}
console.log(factorial(5));
 
//function with in a function 
function interviewer()
 { 
   var hello="hellomam";
   var graduation="btech";
   var percentage="75%";
   interviewee(hello,graduation,percentage)

   function  interviewee() 
   {
       if (percentage>="95%")
        {
           console.log("your are selected");
           return

       }
       else
       {
           console.log("you are not selected");
       }
       
   }

    
}
interviewer()

//class keyword          class keyword          class keyword
 class bottle
 {
     bottle1="bisleri"
     bottle2="kinley"
     bottle3="bailey"
     bottle4="ocean"
    
 }
 var p=new bottle()
 console.log(p.bottle1,p.bottle2);
 //creating a class using constructor

class cars
{
    constructor(name,model)      // constructor used to create an object
    {
     this.name=name;
     this.model=model;
    }
    
}
let mycar= new cars("tata",2018);

console.log(mycar.name,mycar.model);
// using constructor
 class house
 {
     constructor(color,interior,)
     {
         this.color=color;
         this.interior=interior;
     }
 }
  let myhouse= new house("blue","sofa");
  console.log(myhouse.color,myhouse.interior);