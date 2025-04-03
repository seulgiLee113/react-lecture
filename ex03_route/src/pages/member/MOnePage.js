import { useParams, useSearchParams } from "react-router-dom";
import MOneCom from "../../components/member/MOneCom";
import { useState } from "react";
import MOneCon from "../../containers/member/MOneCon";

function MOnePage() {

    // const parmas = useSearchParams();
    // console.log("MOnePage params : ", parmas[0].get("id"));
    const parmas = useParams();
    // console.log("MOnePage params : ", parmas.get("id"));
    console.log("MOnePage params : ", parmas);
    const [user, setUser] = useState("3번 회원정보 가져옴");

    return (
        <div>
            <MOneCon/>
            {/* <MOneCom user={user}/> */}
        </div>
    );
}

export default MOnePage;