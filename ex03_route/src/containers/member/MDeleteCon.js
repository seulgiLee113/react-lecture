import { useNavigate, useParams } from "react-router-dom";
import { deleteList } from "../../service/member/member";
import { useEffect } from "react";

function MDeleteCon() {

    const params = useParams();
    console.log("params", params);

    // id를 삭제하는 함수
    deleteList(params.id);  

    // 삭제 후 list 페이지로 이동
    const navigate = useNavigate();
    useEffect( () => {
        console.log("삭제 완료");
        navigate("/member/list")
    })


    return null;
}

export default MDeleteCon;