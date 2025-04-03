import { useContext } from "react"
import TestCom from "../components/TestCom"
import { TestContext } from "../store/TestContext"

const TestCon = () => {

    // 저장소에서 꺼내와서 사용하기
    const context = useContext(TestContext)
    console.log("context : ", context)
    const onPlus = () => {
        context.clickPlus();
    }
    const onSub = () => {
        context.clickSub();
    }

    return (
        <>
            <TestCom num={context.num} onPlus={onPlus} onSub={onSub}/>
        </>
    )
}

export default TestCon