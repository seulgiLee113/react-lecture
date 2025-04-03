function Child(props) {

    console.log("props : ", props)

    const arr = props.children;
    // const arr = props.children;
    
    // 현재 배열에 [01, 02, 03] 들어있는데, 03은 저장을 하지 않겠다는 뜻.
    // const [a, b] = props.children;
    const [a, b, c] = props.children;

    return ( 
    <> 
        <h3>name : {props.name}</h3>
        <h3>children : {props.children}</h3>
        <h3>arr : {arr}</h3>
        <h3>a : {a}</h3>
        <h3>b : {b}</h3>
        <h3>c : {c}</h3>
            {/* 주석처리 하는 법 */}
        child 
    </>
    )
}

export default Child;