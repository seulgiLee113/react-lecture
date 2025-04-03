import { useContext } from "react";
import HeaderCom from "../components/HeaderCom";
import { AuthContext } from "../store/AuthContext";

const HeaderCon = () => {

    // 사용자에 대한 정보를 갖고옴.
    const {auth, logout} = useContext(AuthContext);

    // 로그아웃 함수
    const onLogout = (e) => {
        e.preventDefault();
        logout();
    }

    return (
        <>
            <HeaderCom onLogout={onLogout} isLoggedIn={auth.isLoggedIn} user={auth.user}/>
        </>
    )
}

export default HeaderCon;