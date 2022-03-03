import React, { useState } from "react";

const User = ({ user, mail }) => {
    const { email, role } = user;
    const [currentRole, setCurrentRole] = useState(role);

    const handleChange = (email, role) => {
        console.log(email, role)
        if (mail === email) {
            alert("You can not change it");
            return;
        }
        const userData = { email, role };
        fetch(`https://dry-journey-24779.herokuapp.com/users/admin`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(userData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.result.modifiedCount) {
                    setCurrentRole(data.role);
                    alert("User Role change successfully!");
                }
            });
    };
    // console.log(currentRole);

    return (


        <>
            <tbody>
                <tr className="bg-white border-b font-primary text-sm grid grid-cols-1 lg:grid-cols-4 place-items-center">
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">{email}</td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">{currentRole}</td>
                    <td className="text-sm text-gray-500 px-6 py-4 whitespace-nowrap">
                        <button
                            className="bg-teal-400 hover:bg-transparent text-white font-semibold hover:text-teal-400 py-2 px-4 border border-transparent hover:border-teal-400 rounded mb-4"
                            size="sm"
                            onClick={() => handleChange(user.email, user.role)}
                        >
                            Change
                        </button>
                    </td>
                </tr>
            </tbody>

        </>
    );
};

export default User;