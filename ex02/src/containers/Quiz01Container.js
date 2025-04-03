import { useState } from "react";
import Quiz01Component from "../components/Quiz01Component";

function Quiz01Container() {

    const [num, setNum] = useState(0);

    const setPlusNum = () => {
        setNum( num + 1);
        console.log(num);
    }

    const setMinusNum = () => {
        setNum ( num -1);
        console.log(num);
    }

    return (
        <>
        <Quiz01Component plus={setPlusNum} minus={setMinusNum} n={num} />
        </>
    )
}

export default Quiz01Container;