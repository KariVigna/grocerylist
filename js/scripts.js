window.onload = function() {
    // console.log("window on load reached! Yay!");
    let form = document.querySelector("form");
    let groceryForm = document.getElementById("groceries");
    groceryForm.removeAttribute("class", "hidden");
    form.onSubmit = function(event) {
    event.preventDefault();
        console.log("form submits");
//Input values called
    const num1 = document.getElementById("list-item1").value;
    const num2 = document.getElementById("list-item2").value;
    const num3 = document.getElementById("list-item3").value;
    const num4 = document.getElementById("list-item4").value;
    const num5 = document.getElementById("list-item5").value;  
    // const ul = document.createElement("ul");
    
    
    
    
    let array1 = [num1,num2,num3,num4,num5];
    let arrayString = array1.join(", ");
    groceryForm.setAttribute("class", "hidden");
    let p = document.createElement("p");
    p.append(arrayString);
    }};

    //Array function called 
//     function getAndSetValues() {;
//     document.body.appendChild(ul);
//     return num1, num2, num3, num4, num5;
//     }
//     
// }}
    // function getAndSetValues() {
    //     let array1 = [num1,num2,num3,num4,num5];
    //     console.log("Array1 assigned, values are:", array1);
    //     let arrayString = array1.join(", ").toString();
    //     let upperString = arrayString.toUpperCase();
    //     return upperString;

    
    // function setForSubmissionHandler() {
    //     console.log("setForSubmissionHandler function reached");
    //     let form = document.querySelector("form");
       

    //     groceryForm.setAttribute("class");
    // }

//     //function getAndSetValues() {
//         console.log("getAndSetValues reached");
//         let num1 = document.getElementById("list-item1").value;
//         let num2 = document.getElementById("list-item2").value;
//         let num3 = document.getElementById("list-item3").value;
//         let num4 = document.getElementById("list-item4").value;
//         let num5 = document.getElementById("list-item5").value;
//         let array1 = [num1,num2,num3,num4,num5];
//         console.log("Array1 assigned, values are:", array1);
//         let arrayString = array1.join(", ").toString;
//         let upperString = arrayString.toUpper;
//         return upperString;
//    // }

//document.getElementById("outputList").innerHTML = getAndSetValues.map(toUpper)
    
//     upperString.forEach(function(item) {
//         const p = document.createElement("p");
//         p.append(item);
//         ul.append(p);
//         console.log("create and output element reached");

//     });
    
// }

// }}

// previous functions
// window.onload = function() {
//     console.log("window on load reached! Yay!");
//     let groceryForm = document.getElementById("groceries")
//     groceryForm.removeAttribute("class");