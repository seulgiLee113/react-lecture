import { useEffect, useState } from "react";

function IndexPage() {

    const [num, setNum] = useState(0);
    useEffect( () => {
        console.log("IndexPage useEffect");
    }, []);
    // [] 넣으면 버튼 클릭했을 때 렌더링 될 때 딱 한번만 나타남. 없으면 버튼 클릭하면 계속 나타남.
    // [num] 그 변수에 대한 값이 변경이 되면 useEffect 실행함. 

    const onClick = () => {
        setNum(num + 1);
    }

    return (
        <div>
            IndexPage <br/>
            <button onClick={onClick}>IndexPage</button><br/>
        </div>
    );
}

export default IndexPage;