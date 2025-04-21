import { useEffect, useState } from "react";

export function Profile() {
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/profile');
            const data = await response.json();
            setFirstName(data.firstName);
            setLastName(data.lastName);
        };
        fetchData();
    }, []); 
    //array is dependency array, if values change the function reruns

    return (
        <div>
            <div>
                <strong>First name: </strong>{firstName}
            </div>
            <div>
                <strong>Last name: </strong>{lastName}
            </div>
        </div>
    );
}