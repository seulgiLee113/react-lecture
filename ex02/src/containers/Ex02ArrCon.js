import Ex02ArrCom from "../components/Ex02ArrCom";

function Ex02ArrCon() {

    const arr01 = [1,2,3];
    // const arr02 = arr01;    // 얕은복사(주소만 복사된다)
    // const arr02 = [arr01[0], arr01[1], arr01[2]];
    const arr02 = [ ...arr01, "추가할"]
    // arr02[3] = 1234
    arr01[3] = 5555

    const [a, b] = arr02;
    console.log("a : " , a);
    console.log("b : " , b);

    return (
        <>
        <Ex02ArrCom arr01={arr01} arr02={arr02}/>
        </>
    )
}

export default Ex02ArrCon;