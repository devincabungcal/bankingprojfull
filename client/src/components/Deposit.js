import React, { useContext, useState } from "react";
import { makeDeposit } from "../api";
import userContext from "./Context";

const Deposit = () => {
  const [deposit, setDeposit] = React.useState("");
  const { currentUser, updateBalance } = useContext(userContext);

  const handleSubmit = (event) => {
    const newBalance = makeDeposit(deposit);
    updateBalance(newBalance)
  };

  return (
    <label className="label huge">
      Deposit:
      <input
        type="number"
        value={deposit}
        onChange={(e) => setDeposit(+e.currentTarget.value)}
      />
      <input type="submit" onClick={handleSubmit} />
      <h1 id="total">Account Balance ${currentUser?.balance}</h1>
    </label>
  );
};

export default Deposit;
