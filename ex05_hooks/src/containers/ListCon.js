import { useEffect, useReducer, useState } from "react";
import ListCom from "../components/ListCom";
import { initialState, reducer } from "../modules/member_red";
import { getList } from "../service/member";
import { type } from "@testing-library/user-event/dist/type";

const ListCon = () => {

    const [state, dispatch] = useReducer(reducer, initialState);
    //const [data, setData] = useState();

    
    
    useEffect( () => {
        //  setData(서버 데이터 저장)

        try{
            // 데이터 받아오기 전 로딩
            dispatch({type : "LOADING"})
            setTimeout( () => {
                const data = getList();
                dispatch({type : "FINISHED"})
                dispatch({type : "LIST", data})
                }, 2)
            // throw new Error("Failed to fetch data")
        } catch (e) {
            dispatch( {type : "ERROR", error:e.toString() })
        }

    }, [])

    console.log("ListCon....state : ", state);

    return (
        <>
            <ListCom data={state.data} loading={state.loading} error={state.error} />
        </>
    )
}

export default ListCon;