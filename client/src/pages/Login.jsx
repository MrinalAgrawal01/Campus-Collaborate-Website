import React from 'react';
import {useState} from "react";
import './login.css';
const Login = () => {
        const [user,setUser] =useState({
            outlookid:"",
            password:""
        });
        // handling the input values
    const handleInput=(e)=>{
        console.log(e);
        let name =e.target.name;
        let value =e.target.value;
        setUser({
            ...user,
            [name]:value,
        });
    };
    // handling the form submission
    const handleSubmit=async (e)=>{
        e.preventDefault();
        // console.log(user);
        try{
            const response=await fetch('http://localhost:5000/register',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                },
                body:JSON.stringify(user),
                
            });
            console.log(response);
            if(response.ok){
                alert("login successful");
                setUser({
                    outlookid:"",
                    password:""});
            }
            else{
                console.log("invalid credentials");
                alert("invalid credentials")
            }
             
        }
        catch(error){
            console.log("login",error);
        }
    }
        
    return <>
    <section>
        <main>
            <div className="container">
                <div className="apply_box">
                    <h1>Login Credentials
                    </h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form_container">
                            <div className="form_control">
                                <label htmlFor="outlookid">Email Id</label>
                                <input 
                                type="email" 
                                id="outlookid " 
                                name="outlookid" 
                                placeholder="Enter Email id"
                                value={user.outlookid}
                                onChange={handleInput}/>
                            </div>
                            <div classNameName ="form_control">
                                <label htmlFor="password">Password</label>
                                <input 
                                id="password" 
                                name="password" 
                                placeholder="password"
                                value={user.password}
                                onChange={handleInput}
                                />
                            </div>
                        </div>    
                        <div className="button_container">
                            <button type="Submit">Login Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </section>
    </>
};
export default Login;