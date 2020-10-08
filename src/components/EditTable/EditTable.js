import React from "react";
import Account from "../Account/Account";

const EditTable = ({accounts, deleteAccount}) => {
    const allAccounts = accounts.map(account => {
        return (
            <Account account = {account} edit = {true} key = {account.id} deleteAccount = {deleteAccount}/>
        )
    })
    return (
        <div className="container">
            <div className="row">
                <div className="col-10 offset-1">
                    <h3 className="display-4 m-4">Edit / Delete</h3>
                    <div className="row">
                        <div className="col-10 offset-1">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>Last Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Action</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   {allAccounts}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditTable;