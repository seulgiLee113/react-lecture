import { useParams } from "react-router-dom";
import MOneCon from "../../containers/members/MOneCon";

function MOnePage() {

    const params = useParams();
    // console.log("MOnePage params : ", params);
    

    return (
        <>
        <MOneCon/>
        </>
    )
}

export default MOnePage;