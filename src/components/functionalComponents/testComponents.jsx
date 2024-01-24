import React from "react";
import Login from "../classComponents/LoginComponents";
//import { ReactDOM } from "react";//ReactDOM=>One of the function present inside the react
//whenever you create functional component you have to create return inside it
//import TestClassComp from "../classComponents/testClassComponent";
// function TestComp() {
//     return (
//         <div>
//             <TestClassComp/>
//             <h1>This is a Test Functional Component.</h1>
//         </div>

//     )
// }
// const root=ReactDOM.createRoot(document.getElementById('root'))
// root.render(
//     <TestComp/>
// )
//export default TestComp;
function TestComp1(){
    return(
        <div>
            <p><h1>REITERATING FUNCTIONAL COMPONENT(functional component)</h1></p>
            <Login/>
        </div>
    )
}
export default TestComp1;


/*
function add(a,b){
    return a+b
}
console.log(add(5,10))
*/