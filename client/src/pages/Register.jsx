import React from 'react';
import {useState} from "react";
import './Register.css';

const Register = () => {
    const [user,setUser] =useState({
        name:"",
        rollno:"",
        major:"",
        minor:"",
        outlookid:"",
        phoneno:"",
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
            if(response.ok){
                const res_data=await response.json();
                console.log("response from server",res_data);
                // storing token in localhost
                // storetokenInLS(res_data.token);
                setUser({
                    name:"",
                    rollno:"",
                    major:"",
                    minor:"",
                    outlookid:"",
                    phoneno:"",
                    password:""});
            }
            console.log(response); 
        }
        catch(error){
            console.log("register",error);
        }
        
    };
    return <>
    <section>
        <main>
            <div className ="container">
                <div className ="apply_box">
                    <div><h1>Login Credentials
                    </h1></div>
                    <form onSubmit={handleSubmit}>
                        <div className ="form_container">
                            <div className ="form_control">
                                <label htmlFor="name">Name</label>
                                <input 
                                id="name" 
                                name="name" 
                                placeholder="Enter name"
                                value={user.name}
                                onChange={handleInput}
                                />

                            </div>
                            <div className ="form_control">
                                <label htmlFor="rollno">Roll No.</label>
                                <input 
                                id="rollno" 
                                name="rollno" 
                                placeholder="Enter Roll No"
                                value={user.rollno}
                                onChange={handleInput}/>
                            </div>
                            <div className ="form_control">
                                <label htmlFor="major">major</label>
                                <input 
                                id="major" 
                                name="major" 
                                placeholder="Enter your major"
                                value={user.major}
                                onChange={handleInput}
                                />
                            </div>
                            <div className ="form_control">
                                <label htmlFor="minor">minor</label>
                                <input 
                                id="minor" 
                                name="minor" 
                                placeholder="Enter your minor"
                                value={user.minor}
                                onChange={handleInput}/>
                            </div>
                            <div className ="form_control">
                                <label htmlFor="outlookid">Email Id</label>
                                <input 
                                type="email" 
                                id="outlookid " 
                                name="outlookid" 
                                placeholder="Enter Email id"
                                value={user.outlookid}
                                onChange={handleInput}/>
                            </div>
                            <div className ="form_control">
                                <label htmlFor="phoneno">Phone Number</label>
                                <input 
                                type="number" 
                                id="phoneno" 
                                name="phoneno" 
                                placeholder="Enter Your Phone Number"
                                value={user.phoneno}
                                onChange={handleInput}/>
                            </div>
                            
                            <div className ="form_control">
                                <label htmlFor="password">Password</label>
                                <input 
                                id="password" 
                                name="password" 
                                placeholder="password"
                                value={user.password}
                                onChange={handleInput}/>
                            </div>
                            
                            
                        </div>
                        <div className ="button_container">
                            <button type="Submit">Register Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </section>
    </>
};
export default Register;