import { useState } from "react";

/* 
    components : 최종적으로 화면을 그리는 용도
    containers : 함수, 연산 등 모든 값들을 components 전달 후 화면 표현
*/

function StateTest01() {

    let num = 100;
    let arr = [10, 20, 30, 40];
    const [a,b,c,d] = arr;
    const [number, setNumber] = useState(0);
            // 0    // number라는 변수를 변경하는 함수
            // 이라는 초기값이 들어감.

    console.log("start : ", num);
    const click = () => {
        num = num + 1;
        setNumber( number + 1);
        console.log("click : ", num);
    }

    return (
        <>
            number : {number} <br/>
            <button onClick={click}>클릭</button>
        </>
    )
}

export default StateTest01;