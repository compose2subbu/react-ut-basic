import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
    const [changedText, setChangedText] = useState(false);

    const changeTextHandler = () => {
        setChangedText(true);
    }
    return (
        <div>
            <h1>Welcome!</h1>
            {!changedText && <Output>It's good to see you!</Output>}
            {changedText && <p>Text is Changed!</p>}
            <button onClick={changeTextHandler}>Change Text</button>
        </div>
    );
}

export default Greeting;