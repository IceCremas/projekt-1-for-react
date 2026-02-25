import { useState } from "react";

export default function FriendsList () {
    const [friends, setFriends] = useState([]);
    const [userInput, setUserInput] = useState("");

    const addFriends = (e) => {
        e.preventDefault();
        if (userInput == "") return;
        setFriends([...friends, userInput]);
        setUserInput("");
    };
   
    return (
        <>
            <form onSubmit={addFriends}>
                <input type="text"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                />
                <button type="submit">add</button>
            </form>
            <ol>
                {friends.map((friend, i) => (
                    <li key={i}>{friend}</li>
                ))}
            </ol>
        </>
    );
}