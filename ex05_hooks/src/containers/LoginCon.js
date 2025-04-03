import LoginCom from "../components/LoginCom";
import { initialState, reducer } from "../modules/member_red";
import { useContext, useReducer } from "react";
import { AuthContext } from "../store/AuthContext";
import { useNavigate } from "react-router-dom";
import { loginCheck } from "../service/member";

const LoginCon = () => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const onChange = (e) => {
        console.log("e.target.value ", e.target.value);

        const {name, value} = e.target;
        dispatch({type : "CHANGE_INPUT", name, value, form:"login"})
    }

    console.log("login con state : ", state);

    // 로그인한 사용자에 대해 검증하는 코드 작성
    const {login} = useContext(AuthContext);
    const navigate = useNavigate()
    const onSubmit = (e) => {
        e.preventDefault();

        dispatch({type : "LOADING"})
        const result = loginCheck(state.login.id, state.login.pwd);
        dispatch({type : "FINISHED"})

        if(result === 0) { // 인증 통과
            login(state.login.id)
            navigate("/list")
        }
    }

    return (
        <>
            <LoginCom onSubmit={onSubmit} loading={state.loading}
                        username={state.login.id} password={state.login.pwd}
                        onChange={onChange}/>
        </>
    )
}

export default LoginCon;