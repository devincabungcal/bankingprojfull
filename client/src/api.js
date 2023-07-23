export async function createAccount(name, email, password){
   
    const response = await fetch("/api/accounts", {
        method:"POST",
        body:JSON.stringify({
            name:name,
            email:email,
            password:password,
            balance:0,
        }),
        headers:{
            "Content-Type":"application/json"
        }})
    const newUser = await response.json()
    localStorage.setItem("token", newUser._id)
    return newUser
}
export async function loginAccount(email, password){
   
    const response = await fetch("/api/accounts/login", {
        method:"POST",
        body:JSON.stringify({
            email:email,
            password:password,
            balance:0,
        }),
        headers:{
            "Content-Type":"application/json"
        }})
    const newUser = await response.json()
    localStorage.setItem("token", newUser._id)
    return newUser
}

export async function makeDeposit(amount){
    const token = localStorage.getItem("token")
    if(!token){
        return
    }
    const response = await fetch("/api/accounts/" + token + "/balance", {
       method:"PUT", 
       body:JSON.stringify({
        amount:amount
       }), 
       headers:{
        "Content-Type":"application/json"
    }
    })
    const data = await response.json()
    return data.balance
}
export async function makeWithdrawal(amount){
    const token = localStorage.getItem("token")
    if(!token){
        return
    }
    const response = await fetch("/api/accounts/" + token + "/balance", {
       method:"PUT", 
       body:JSON.stringify({
        amount:-amount
       }), 
       headers:{
        "Content-Type":"application/json"
    }
    })
    if(!response.ok){
        return{
            error:"Insufficient Balance"
        }
    }
    const data = await response.json()
    return {
        balance:data.balance
    }
}

export async function getAccountsData(){
    const response = await fetch("/api/accounts")
    const accounts = await response.json()
    return accounts
}

export async function getCurrentAccountData(){
    const token = localStorage.getItem("token")
    if(!token){
        return
    }
    const response = await fetch("/api/accounts/" + token)
    const account = await response.json()
    return account
}

export function logOut(){
    localStorage.removeItem("token")
}