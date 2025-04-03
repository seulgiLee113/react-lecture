import Ex03ObjCom from "../components/Ex03ObjCom";

function Ex03ObjCon() {
    const obj01 = {id : "aaa", name : "홍길동"}
    // const obj02 = obj01;

    // const obj02 = {...obj01};
    // const obj02.name = "김길이";
    
    // const obj02 = {...obj01, name : "김길이"};
    const obj02 = {...obj01, name : "김길이", addr : "산골짜기"};

    return (
        <>
        <Ex03ObjCom obj01={obj01} obj02={obj02}/>
        </>
    )

}
export default Ex03ObjCon;