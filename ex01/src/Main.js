function Main( { myClick, tel, nick} ) {
    return <>
    <h5>
        tel : {tel}<br/>
        nick : {nick}<br/>
        main 영역
    <button onClick={myClick}> 클릭 </button>
    </h5>
    </>
}

export default Main;