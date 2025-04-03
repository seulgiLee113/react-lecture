import { useReducer, useState } from "react"
import ReducerCom from "../components/ReducerCom"

const reducer = (state, action) => {
    // 첫 번째 인자 state : 자기 자신에 대한 정보, 현재 state에 대한 정보.
    // 두 번째 인사 action: 어떤 행위를 처리함. dispatch() 에 인자 값으로 전달해야함.
    // console.log("reducer call : ", state);
    console.log("reducer call : ", action);

    // action의 type에 따른 처리
    switch( action.type) {
        case "UP" : return {value : state.value + 1}
        case "DOWN" : return { value : state.value -1}
        default : return state;
    }

    // return{
    //     // return에 state 값을 변경하는 코드가 들어온다. state에 값이 들어간다.
    //     value : 1000
    // }
}

const initialState = {value : 0}

const ReducerCon = () => {
    // const [num, setNum] = useState(0)
    const [state, dispatch] = useReducer(reducer, initialState);
                // state에 대한 값을 변경하는 목적으로만 사용됨.
                // reducer 함수를 부른다.

    console.log("state", state);

    const onUp = () => {
        dispatch({type : "UP"})
        // reducer 함수를 호출한다.
        // {} 안에 들어가는 값이 action에 들어간다.
    }
    const onDown = () => {
        dispatch({type : "DOWN"})
    }

    return (
        <>
            <ReducerCom state={state} onUp={onUp} onDown={onDown}/>
        </>
    )
}

export default ReducerCon;