import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MOneCom from "../../components/member/MOneCom";
import { getOne } from "../../service/member/member";

function MOneCon() {

    const [user, setUser] = useState();

    const params = useParams();
    
    useEffect( () => {
        setUser( getOne(params.id));
    }, [params.id]);

    return (
    <>
        <MOneCom user={user}/>
    </>
    )
}

export default MOneCon;