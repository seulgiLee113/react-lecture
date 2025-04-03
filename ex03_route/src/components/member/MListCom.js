import { Link } from "react-router-dom";

function MListCom2({list, indexBtn, beforeBtn}) {

    console.log("end")

    return (<>
    <div>1. 회원목록</div>
    <div>2. 회원목록</div>
    <div>3. 회원목록</div>
    <hr/>
    <Link to="/member/one?id=3">3번 회원 상세</Link> &nbsp;
    <Link to="/member/update/1">1번 회원 수정</Link> &nbsp;
    <hr/>
    <button onClick={indexBtn}>Index</button> &nbsp;
    <div onClick={beforeBtn}>beforeBtn</div>
    </>)
}

function MListCom( {list, onDelete} ) {
    console.log("end")
    return ( <>
        {list && list.map((item, index) => (
            <div key={index}>
                id : {item.id} <br/>
                name : 
                <Link to={`/member/one/${item.id}`}>{item.name}</Link>
                <br/>
                age : {item.age} <br/>
                addr : {item.addr}
                <button onClick={ () => onDelete(item.id)}>{item.id} 삭제</button>
                {/* 사용자의 id를 넘겨줌 */}
                {/* <button onClick={onDelete (item.id)}>{item.id} 삭제</button> */}
                {/* 이렇게 하면 페이지가 렌더링될 때 onClick 이벤트가 실행됨.  */}
                <hr/>
            </div>
        ))}
    </>)
}

export default MListCom;