export function createAccount(name, email, password){
    const accounts = JSON.parse(localStorage.getItem("accounts")) || []
    accounts.push({
        name:name,
        email:email,
        password:password,
        balance:0,
    })
    localStorage.setItem("accounts", JSON.stringify(accounts))
    return accounts[accounts.length - 1]
}

export function makeDeposit(amount){
    const accounts = JSON.parse(localStorage.getItem("accounts")) || []
    accounts[accounts.length - 1].balance += amount
    localStorage.setItem("accounts", JSON.stringify(accounts))
    return accounts[accounts.length - 1].balance
}
export function makeWithdrawal(amount){
    const accounts = JSON.parse(localStorage.getItem("accounts")) || []
    accounts[accounts.length - 1].balance -= amount
    localStorage.setItem("accounts", JSON.stringify(accounts))
    return accounts[accounts.length - 1].balance
}

export function getAccountsData(){
    const accounts = JSON.parse(localStorage.getItem("accounts")) || []
    return accounts
}

export function getCurrentAccountData(){
    const accounts = JSON.parse(localStorage.getItem("accounts")) || []
    return accounts[accounts.length - 1]
}