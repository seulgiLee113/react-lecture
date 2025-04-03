import { useNavigate, useParams } from "react-router-dom"

function NotFound() {

    const navigate = useNavigate();
    const onclick = () => {
        navigate("/")
    }

    return (
        <>
        member/없는경로 페이지는 존재하지 않습니다.
        <h1>{ useParams()["*"] } NotFound</h1>
        <br/>
        <button onClick={onclick}>HOME 이동</button>
        {/* 또는 onClick={ () => navigate("/") }  */}
        </>
    )
}

export default NotFound;