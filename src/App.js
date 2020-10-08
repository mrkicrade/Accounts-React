import React, { useState } from "react";
import Header from "./components/Header/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AccountsTable from "./components/AccountsTable/AccountsTable";
import AddAccount from "./components/AddAccount/AddAccount";
import EditTable from "./components/EditTable/EditTable";
import EditAccount from "./components/EditAccount/EditAccount";

function App() {

    const [accounts, setAccounts] = useState([
        {id : 1, name : "Luka", lastName : "Mrkic", email : "luka@gmail.com", phone : "111-111"},
        {id : 2, name : "Rade", lastName : "Mrkic", email : "rade@gmail.com", phone : "222-222"}
    ])

    const addNewAccountToState = (acc) => {
        setAccounts([...accounts, acc])
    }

    const deleteAccount = (id) => {
        const newCopyAccounts = accounts.filter(account => account.id !== id);
        setAccounts(newCopyAccounts);
    }

    const editAccount = (acc) => { // acc je prosledjen account iz editAccount-a
        // console.log(acc);
        let accountPosition = accounts.map(account => account.id).indexOf(acc.id); // U našem slučaju pošto je ovo Luka, njegov id je 1, pitamo gde se nalazi 1 u araayu accontPosition i on će reći na nultoj poziciji.
        accounts[accountPosition] = acc;
        setAccounts(accounts);
    }

    
    return (
        <BrowserRouter>
            <Header />
            <Route path = "/" exact>
                <AccountsTable accounts = {accounts}/>
            </Route>
            <Route path = "/add">
                <AddAccount addNewAccountToState = {addNewAccountToState}/>
            </Route>
            <Switch>
                <Route path="/edit/:id">
                    <EditAccount accounts={accounts} editAccount = {editAccount}/>
                </Route>
                <Route path = "/edit">
                    <EditTable accounts = {accounts} deleteAccount = {deleteAccount}/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
    
}

export default App;