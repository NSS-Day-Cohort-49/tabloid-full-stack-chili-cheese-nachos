import React, { useEffect, useState } from "react";
import User from "./User";
import { getAllUsers } from "../../modules/userManager";

export default function UserList() {
    const [users, setUsers] = useState([]);


    useEffect(() => {
        getAllUsers().then(setUsers)
    }, [])




    return (
        <section>

            {users.map(u =>
                <User key={u.id} user={u} />
            )}
        </section>
    );
}