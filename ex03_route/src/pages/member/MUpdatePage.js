import { useParams } from "react-router-dom";
import MUpdateCom from "../../components/member/MUpdateCom";
import { useState } from "react";
import MUpdateCon from "../../containers/member/MUpdateCon";

function MUpdatePage() {

    const params = useParams();
    console.log("MUpdatePage params : ", params);

    /*
        page -> container -> service (DB연동). mybatis 연동
                          -> components. view 단
    */

    const [user, setUser] = useState("1번 회원정보 가져옴")

    return (
        <div>
            <MUpdateCon/>
            {/* <MUpdateCom user={user}/> */}
        </div>
    );
}

export default MUpdatePage;