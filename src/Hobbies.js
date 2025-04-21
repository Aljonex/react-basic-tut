import { useEffect, useState } from "react";

export function Hobbies() {
const [firstHobby, setFirstHobby] = useState("");
const [secondHobby, setSecondHobby] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3001/hobbies');
            const data = await response.json();
            setFirstHobby(data.firstHobby);
            setSecondHobby(data.secondHobby);
        };
        fetchData();
    }, []); 
    //array is dependency array, if values change the function reruns

    return (
        <div>
            <div>
                <strong>Hobby #1: </strong>{firstHobby}
            </div>
            <div>
                <strong>Hobby #2: </strong>{secondHobby}
            </div>
        </div>
    );
}