import { Link } from "react-router-dom";

const HeaderCom = ({onLogout, isLoggedIn, user}) => {
    return (
        <>
            <Link to="/">HOME</Link> &nbsp;
            <Link to="/list">LIST</Link> &nbsp;
            {isLoggedIn ? <> <Link to="/login" onClick={onLogout}>LOGOUT</Link> 
                            {user} 님 로그인 상태 </>
                        : <Link to="/login">LOGIN</Link> 
            } &nbsp;
            <Link to="/register">REGISTER</Link> &nbsp;
            <Link to="/context">context</Link> &nbsp;
            <hr/>
        </>
    )
}

export default HeaderCom;