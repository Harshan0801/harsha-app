import React from "react";
//extends React.component=> will make your class into react class
class TestClassComp extends React.Component{
    //class will not retrun everything it will ask for object so we use render here.//render is a kind of object will allow to access jsx code
    render(){
        return (
            <div>
                <strong>HARSHA</strong>
                
                <h1>Login Page(class component 2)</h1>
            </div>
            
    
        )
    }

}
export default TestClassComp;