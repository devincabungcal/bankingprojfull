import React, {useContext, useState} from "react";
import userContext from "./Context";
import Card from "./Card";
import { loginAccount } from "../api";

export default function Login() {
  const [status, setStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setCurrentUser } = useContext(userContext);

  async function handleCreate() {
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    const newUser = await loginAccount(email, password);
    setCurrentUser(newUser);
  }

  function validate(field, label) {
    if (!field) {
      setStatus("Error: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  return (
    <Card
      bgcolor="danger"
      header="Log in to your account"
      status={status}
      body={
          <>
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email address"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter unsecure password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
            >
              Log in
            </button>
          </>
      }
    />
  );
}
