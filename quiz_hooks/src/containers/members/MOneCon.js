import { useEffect, useState } from "react";
import MOneCom from "../../components/member/MOneCom"
import { getOne } from "../../service/member/member";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";

function MOneCon() {

    const [data, setData] = useState({});
    const [params] = useSearchParams();
    console.log("data----", data);
    // console.log("MOneCon params : ", params);

    useEffect( () => {
        const id = params.get("id");
        setData(getOne(id));
    }, [params]);

    const navigate = useNavigate();
    const onDelete = (id) => {
        console.log("MOneCon delete id------>", id)
        navigate("/member/delete/" + id)
        // alert("삭제되었습니다.")
    }

    const onModify = (id) => {
        navigate("/member/modify/" + id);
    }

    return (
        <>
        <MOneCom onModify={onModify} data={data} onDelete={onDelete}/>
        </>
    )
}

export default MOneCon