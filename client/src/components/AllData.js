import React, { useEffect } from "react";
import { getAccountsData } from "../api";


function AllData(){
    const [allData, setAllData]         = React.useState(null);
    useEffect(function(){
        setAllData(getAccountsData())
    }, [])
    return(
        <>
       <div>All Data</div>
       <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
            </tr>
        </thead>
        <tbody>
            {allData?.map(function(account){
                return <tr>
                    <td>{account.name}</td>
                    <td>{account.email}</td>
                    <td>{account.password}</td>
                    <td>{account.balance}</td>
                </tr>
            })}
        </tbody>
       </table>
       </>
    );
}

export default AllData;