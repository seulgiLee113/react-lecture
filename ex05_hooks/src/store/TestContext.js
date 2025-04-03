import { createContext, useState } from "react";

// 전역에서 저장소 같은 역할
const TestContext = createContext(); // 전역에서 사용할 수 있는 저장소 생성
const TestProvider = ({children}) => {
                        // children 에는 <App/>이 들어옴!!@
    // 전역에서 등록할 값을 저장하는 곳.
    // 정의하고 싶은 변수나 기능들을 정의해서 아래에 저장.

    const [num, setNum] = useState(0);

    const clickPlus = () => {
        // alert("clickPlus")
        setNum(num + 1);
    }
    const clickSub = () => {
        // alert("clickSub")
        setNum(num - 1);
    }

    const value = {clickPlus, clickSub, num}

    return (<>
        <TestContext.Provider value={value}>
            {children} 
            {/* 여기에 <App/>이 들어오기 때문에 <App/>은 TestContext.Provider 라는
                저장소를 사용할 수 있게 된다. */}
        </TestContext.Provider>
    </>)
}

export {TestContext, TestProvider}