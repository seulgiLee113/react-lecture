import { Link, Outlet } from "react-router-dom";

function HeaderCom() {

    return (
        <div>
            <header>
                <Link to="/">Home</Link> &nbsp;
                <Link to="/member/list">MEMBER</Link> &nbsp;
                <hr/>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}

export default HeaderCom;