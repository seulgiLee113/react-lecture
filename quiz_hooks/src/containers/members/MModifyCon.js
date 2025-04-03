import { useEffect, useState } from "react";
import MModifyCom from "../../components/member/MModifyCom"
import { getOne, modify } from "../../service/member/member";
import { useNavigate, useParams } from "react-router-dom";

const MModifyCon = () => {

    const params = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        setData( getOne(params.id));
    }, [params])

    console.log("data", data);

    const navigate = useNavigate();

    const onChange = (e) => {
        setData( {...data, [e.target.name] : e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("onSubmit", data);
        modify(data)
        navigate("/member/one?id=" + data.id);
    }

    return (
        <>
            <MModifyCom data={data} onChange={onChange} onSubmit={onSubmit} />
        </>
    )
}

export default MModifyCon