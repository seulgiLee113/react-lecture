import { useEffect, useState } from "react";
import MListCom from "../../components/member/MListCom";
import { getList } from "../../service/member/member";
import { useNavigate } from "react-router-dom";

function MListCon() {

    const [list, setList] = useState([]); 
    
    useEffect(() => {       // 랜더링이 일어날 때 마다 실행됨.
        setList(getList());
    }, [])

    const navigate = useNavigate();
    const onDelete = ( id ) => {
        // alert(id + " : 삭제")
        navigate("/member/delete/" + id)
    }

    return (
    <div>
        <MListCom list={list} onDelete={onDelete} />
    </div>
    )
}

export default MListCon;