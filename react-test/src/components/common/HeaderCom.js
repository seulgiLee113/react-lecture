import { Link, Outlet } from "react-router-dom"

const HeaderCom = () => {
    return (
        <div>
            <header>
                <Link to="/">HOME</Link> &nbsp;
                <Link to="/member/list">MEMBER</Link> &nbsp;
                <Link to="/login">LOGIN</Link> &nbsp;
                <Link to="/member/register">회원가입</Link> &nbsp;
                <hr/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    )
}

export default HeaderCom