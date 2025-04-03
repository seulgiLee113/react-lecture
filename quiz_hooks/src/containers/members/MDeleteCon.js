import { useNavigate, useParams } from "react-router-dom"
import { deleteOne } from "../../service/member/member";
import { useEffect } from "react";

function MDeleteCon() {

    const params = useParams();
    const result = deleteOne(params.id);
    const navigate = useNavigate();
    
    useEffect( () => {  
        if(result === 1) {
            alert("삭제 성공"); // 두 번 알람창이 뜨는 것은 리액트가 검사하기 때문임.
            console.log("삭제 완료");
            navigate("/member/list");
        }
    },[navigate, result])

    return (<div>
        MDeleteCon
    </div>);
}

export default MDeleteCon