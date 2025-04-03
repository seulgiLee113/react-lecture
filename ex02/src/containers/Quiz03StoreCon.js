import { useState } from "react";
import Quiz03StoreCom from "../components/Quiz03StoreCom";

function Quiz03StoreCon() {

    const [store, setStore] = useState(
            {msg : "", inData : 0, outData : 0})
    
    // console.log("Object.keys(store) : ", Object.keys(store))
    // console.log("Object.keys(store).length : ", Object.keys(store).length);

    if(Object.keys(store.msg).length === 0) {
        setStore( {...store, msg : "오픈 전 입니다."})
    }


    const onChnageIn = () => {
        setStore({...store, msg : "어서오세요", inData : store.inData + 1});
        console.log("store.inData : " , store.inData);
        console.log("store.msg : ", store.msg);
    }
    
    const onChangeOut = () => {
        
        if(store.inData - store.outData === 0) {
            alert("나갈 손님이 없습니다.")
        } else {
            setStore({...store, msg : "안녕히 가세요", outData : store.outData + 1});
            console.log("store.outData : " , store.outData);
            console.log("store.msg : ", store.msg);
        }
    }

    return (
        <>
            <Quiz03StoreCom store={store}
            onChnageIn={onChnageIn}
            onChangeOut={onChangeOut}/>
        </>
    )
}

export default Quiz03StoreCon;