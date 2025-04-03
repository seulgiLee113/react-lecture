import { useReducer, useState } from "react"
import LoginCom from "../components/LoginCom"
import { initialState, reducer } from "../Modules/member_red";

const LoginCon = () => {

    // const [user, setUser] = useState();
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChange = (e) => {
        console.log(e.target.value);

        const {name, value} = e.target;
        dispatch({type : "CHANGE_INPUT", name, value, form:"login"})
    }

    console.log("login con state : ", state);

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("submit state...", state);
    }

    return (
        <>
            <LoginCom onChange={onChange} username={state.login.id} password={state.login.pwd}
                    onSubmit={onSubmit}/>
        </>
    )
}

export default LoginCon