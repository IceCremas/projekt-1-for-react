import { useState } from "react";

function Mycompoment() {
    const [input, setInput] = useState("user");

    return (
        <>
        <h1>{input}</h1>
            <input type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={()=> setInput('')}>jfjfj</button>
        </>
    )
}

export default Mycompoment