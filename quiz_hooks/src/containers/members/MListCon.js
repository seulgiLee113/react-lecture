import { useEffect, useState } from "react"
import MListCom from "../../components/member/MListCom";
import { getList } from "../../service/member/member";


function MListCon() {

    const [list, setList] = useState([]);

    useEffect( () => {
        setList(getList());
    }, []);

    // console.log("MListCon", list);

    return (
        <>
        <MListCom list={list}/>
        </>
    )
}

export default MListCon