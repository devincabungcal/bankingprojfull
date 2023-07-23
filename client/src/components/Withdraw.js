import React, { useState, useContext } from "react";
import { makeWithdrawal } from "../api";
import userContext from "./Context";


let status = "Account Balance $0";

const Withdraw = () => {
  const [withdraw, setWithdraw]         = useState("");
  const { currentUser, updateBalance } = useContext(userContext);


  const handleSubmit = async event => {
    const {balance, error} = await makeWithdrawal(withdraw)
    if(error){
      alert(error)
      return
    }
    updateBalance(balance)

  };
  
  return (
    <label className="label huge">
      Withdraw:
      <input type="number" value={withdraw} onChange={e => setWithdraw(+e.currentTarget.value)}></input>
      <input type="submit" onClick={handleSubmit}></input>
      <h1 id="total">Account Balance ${currentUser?.balance}</h1>
      
    </label>
  );
};

export default Withdraw