//Variable Declaration

//debugging
let firstName = "John Doe";
let age = 24;
let address = "Cavite";
let ageOfPerson = "24";
//console.log("Hello world " + firstName + ", i'm "+ age + "years old. I live in "+ address);
//console.log(`Hello world ${firstName}, i'm ${age} years old. I live in ${address}`);

//1. DATA TYPES

    //String
        let dataType1 = "John Doe";
        //console.log(dataType1);
        dataType1 = "John Davis";
        //console.log(dataType1);

        //length
        //console.log(dataType1.length);
        //replace      0123456789
        let strEmail = "john_cena@gmail.com";
        let customEmail = strEmail.replace("@gmail.com","@sdca.edu.ph");

        //console.log(`before: ${strEmail}, after ${customEmail}`);
        //indexOf
        let posString = strEmail.indexOf("@");
        //console.log(posString);
        //slice
        let sliceString = strEmail.slice(5,9);
        //console.log(sliceString);
        //substr
        let strString = strEmail.substr(5,9);
        //console.log(strString);
        //Autosuggest email;

        let setEmail = "helllowoeajkdjsa@test.edu.com";
        //you have an email input, return the domain name of email from the email input.
        //let maxString = ;
        let emailDom = setEmail.slice(setEmail.indexOf("@"));
        //console.log(emailDom);

    //Integer
        
        let ageSample = ageOfPerson; 
        //console.log(24+parseFloat(ageSample));
        let numInput = 57;
        
        // if(numInput % 2){
        //     console.log("Odd");
        // } else {
        //     console.log("Even");
        // }
        //parseInt
        //parseFloat
        //Number
        //modulo

    //Boolean
        let isAdmin = true;
        let isLoggin = true;
        let isPaid = true;
        let strPaid = "true";
        //console.log(typeof isPaid);
    //Null
        let undefVar = null;
    //Undefined
        let undefVar2;
        //console.log(undefVar2);
    //Symbol
        const fixedValue = Symbol("Hello");
        //console.log(fixedValue);
        //fixedValue = Symbol("New Value");
    //BigInt

    //typeOf    

    //Array                 0       1   2       3       4         5         6          7   
        let userData1 = ["john doe",24,false,"Cavite"];
        let userData2 = ["john davis",20,true,"Cavite"];

        //console.log(userData[1]);
        //length
        //console.log(userData1.length);

        //indexOf
        //console.log(userData1.indexOf("1998"));

        //concat
        let combineUser = userData1.concat(userData2);
        //console.log(userData1);

        //push 
        //console.log(userData1.push("1998",100,"Luzon"));
        //console.table(userData1);

        //pop
        // userData1.pop();
        // console.table(userData1);

        //shift
        // userData1.shift();
        // console.table(userData1);

        //include
        console.log(userData1.includes("Cavite2"));
        
    //Object
        let userDataObj = {
            firstname: "John",
            lastname: "Doe",
            age: 24,
            isEnrolled: false,
            address: "Cavite"
        }

        let keyObj = "address"; 
        // console.log(userDataObj.lastname);    //dot-readability   
        // console.log(userDataObj[keyObj]); //bracket much flexible
        //console.table(userDataObj);
    //Date
        const todayDate = new Date();
        ///console.log(todayDate.toDateString()); //"YYYY-MM-DD"
        const currentYear   = todayDate.getFullYear();
        const currentMonth  = todayDate.getMonth() + 1;
        const currentDay    = todayDate.getDate();

        const fullDate = currentYear+"-"+currentMonth+"-"+currentDay;
        //console.log(fullDate);
        
//2. OPERATION AND EXPRESSION
    //equal
    let password = "admin";
    let inputpassword = "";
    //let inputpassword = prompt("Type your password");
    
    
    // if(password == inputpassword){
    //     console.log("success");
    // } else {
    //     console.log("Wrong Password");
    // }
    //strict equal
    let numberVal = 250;
    let stringVal = "250";

    if(numberVal === stringVal){
        console.log("same amount");
    } else {
        console.log("not same amount");
    }

    //not equal
    let isAdmin2 = "admin";
   

    if(isAdmin2 != "admin"){
        console.log("You not an admin");
    } else {
        console.log("You are admin");
    }

    //greater than
    //greater than or equal
    //less than
    //less than or equal
    //logical AND
    //logical OR
    //logical NOT


//3. CONDITIONAL STATEMENT
    //If-else
        //password condition
        //years of experience
        //pwd discount
        //withdrawal amount


    //switch-case
        //tier- ss,s,a,b,c,d
        //transporation fare/mode = jeep 13, bus 15, aircon-20, minibus-12, grab-200,lrt-15
        

//4. LOOPS AND ITERATION
    //for loops
        //months loop
        //print loop
        //process loop
        

    
    //while loop
        


//5. FUNCTIONS
    //basic function
    //parameterize function
    //using return and function assignment

    //examples
    //additional function

    //create a function that accepts distance(km) as an input, where you calculate the grab fare distance for 10peso per km. The starting fare begins at 200.

    //create a function that accepts two input, the amount tendered(amount due) and a boolean for pwd, compute for the net amount, and return the computed value.

    //create a function that accepts first name and last name, and generate an automatic email for it, using the format 
    //(first letter of the firstname).(lastname)@sdca.edu.ph
    //f.barbon@sdca.edu.ph


//Objects
    //Object structure
    //accessing objects
    //modifying objects
    //adding keys
    //looping objects
    //looping array of objects
    