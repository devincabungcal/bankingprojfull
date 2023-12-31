import React, {useContext, useState} from "react";
import userContext from "./Context";
import Card from "./Card";
import { createAccount } from "../api";

function CreateAccount(){
    const [show, setShow]         = useState(true);
    const [status, setStatus]     = useState('');
    const [name, setName]         = useState('');
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
  
    const {setCurrentUser} = useContext(userContext);  
  
    async function handleCreate(){
      console.log(name,email,password);
      if (!validate(name,     'name'))     return;
      if (!validate(email,    'email'))    return;
      if (!validate(password, 'password')) return;
      const newUser = await createAccount(name, email, password)
      setCurrentUser(newUser)
      setShow(false);
    }   

    function validate(field, label){
        if (!field) {
          setStatus('Error: ' + label);
          setTimeout(() => setStatus(''),3000);
          return false;
        }
        return true;
    }
  
    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
      }
  
    return (
        <Card
  
        bgcolor="danger"
        header="Create a new Account"
        status={status}
        body={show ? (
            <>
            Name<br/>
            <input type="input" className="form-control" id="name" placeholder="Enter full name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
            Email address<br/>
            <input type="input" className="form-control" id="email" placeholder="Enter email address" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
            Password<br/>
            <input type="password" className="form-control" id="password" placeholder="Enter unsecure password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
            </>
          )}
  />
  )
  }

  
export default CreateAccount;