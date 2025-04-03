import { createContext, useState } from "react"

const initialState = {isLoggedIn : false, user : null}
const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState(JSON.parse(
        sessionStorage.getItem("auth") ) || initialState);
        // 해당하는 값이 있으면 JSON.parse를, 없으면 initialState 사용
    const login = (user) => {
        setAuth({isLoggedIn : true, user})
        // isLoggedIn 상태를 true로 하고, 사용자에 대한 정보(user)를 등록.

        sessionStorage.setItem("auth", JSON.stringify({isLoggedIn : true, user}) );
                                                        // 로그인 상태를 유지
    }
    const logout = () => {
        setAuth(initialState)
        sessionStorage.clear(); // 로그아웃 시 세션스토리지 삭제
    }

    const value = {login, logout, auth}

    return (<>
        <AuthContext.Provider value={value}>
            {children}    
        </AuthContext.Provider>    
    </>)
}

export {AuthContext, AuthProvider}