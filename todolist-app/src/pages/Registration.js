import React from "react";
import { useState } from "react";
import App from "../App.css";
import { useNavigate } from 'react-router-dom';


export default function Reginput() {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [phonenumber, setPhonenumber] = useState("")
    const [username, setUsername] = useState("")
    const [passWord,setPassWord] = useState ("")
    const [users,setUsers]  = useState("[]")
    const [reg,setReg] = useState(false)
   
   
    const navigate = useNavigate();

    
    const SaveNamechanges = (e) => {
       
        const value = e.target.value;
        setName(value);
    };

    const SaveSurnamechanges = (e) => {
        const value = e.target.value;
        setSurname(value);
    };

    const SaveEmailchanges = (e) => {
        const value  = e.target.value;
        setEmail(value);
    };

    const SavePhonenumberchanges = (e) => {
        const value = e.target.value;
        setPhonenumber(value);
    };

    const SaveUsernamechanges = (e) => {
        const value = e.target.value;
        setUsername(value);
    };

    const SavepassWordchanges = (e) => {
      const value = e.target.value;
      setPassWord(value);
  };

    
      const storeUser = (event) => {
        event.preventDefault();
    
        const newUser = {
          Name: name,
          Surname: surname,
          Email: email,
          Phonenumber: phonenumber,
          Username: username,
          Passsword:passWord,
        
        };
        
       setUsers([...users, newUser])
        setName("");
        setSurname("");
        setEmail("");
        setPhonenumber("");
        setUsername("");
        setPassWord("");
        setReg(true);
        console.log(users)
        
     

         };

          const changepage = (e)=> {
            e.preventDefault();
            navigate('/Home');
          
          }

    return (

        <div className="App">
      <header className="reg-header">
        <h1>Registration </h1>
        <form>
          <input
            value={name}
            type="text"
            name="name"
            onChange={SaveNamechanges}
            placeholder="Enter name"
          />
          <input
            value={surname}
            type="text"
            name="surname"
            onChange={SaveSurnamechanges}
            placeholder="Enter surname"
          />
          <input
            value={email}
            type="text"
            name="email"
            onChange={SaveEmailchanges}
            placeholder="Enter Email"
          />
          <input
            value={username}
            type="text"
            name="username"
            onChange={SaveUsernamechanges}
            placeholder="Enter ID"
          />
          <input
            value={phonenumber}
            type="text"
            name="phonenumber"
            onChange={SavePhonenumberchanges}
            placeholder="Enter Phone number"
          />
          <input
            value={passWord}
            type="text"
            name="phonenumber"
            onChange={SavepassWordchanges}
            placeholder="Enter Phone number"
          />
             </form>
             
             <button onClick={storeUser}>Register</button>
             <button onClick={changepage}>Login</button>

           </header>
          </div>


    )
    
}

