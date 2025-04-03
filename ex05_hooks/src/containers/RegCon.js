import { useReducer } from "react";
import RegCom from "../components/RegCom";
import { initialState, reducer } from "../modules/member_red";
import { useNavigate } from "react-router-dom";
import { register } from "../service/member";
import { type } from "@testing-library/user-event/dist/type";

const RegCon = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const onChange = (e) => {
        const {value, name} = e.target;
        dispatch( {type : "CHANGE_INPUT", name, value, form:"register"});
    }

    const navigate = useNavigate();
    const onSubmit = (e) => {
        e.preventDefault();
        console.log( "register : ", state)

        try {
            dispatch({type : "LOADING"})

            // setTimeout( () => {
                const result = register(state.register) // <- 백엔드에서 처리하는 부분
                dispatch({type : "FINISHED"})
                console.log("result : ", result);
    
                if(result === 1) {
                    navigate("/list")
                } else {
                    throw new Error("동일 아이디 있음")
                }
            // }, 2000)     // 서버에서 처리하는데 시간이 걸린다면 setTimeout 사용해줄 수 있음.
            
        } catch(e) {
            dispatch({type:"ERROR", error : e.toString() })
        }
    }


    return (
        <>
            <RegCom loading={state.loading} error={state.error}
                    onSubmit={onSubmit}
                    onChange={onChange} id={state.register.id}
                    pwd={state.register.pwd} name={state.register.name}
                    addr={state.register.addr}/>
        </>
    )
}

export default RegCon;