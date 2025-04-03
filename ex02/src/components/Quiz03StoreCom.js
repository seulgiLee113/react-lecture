function Quiz03StoreCom( {store, onChnageIn, onChangeOut} ) {
    return (
        <div>
            {store.msg === "" ? 
             ("오픈 전 입니다") : 
             <div>
                in number : {store.inData}<br/>
                out number : {store.outData}<br/>
                in - out : {store.inData - store.outData}<br/>
                </div>
                }
            {/* {store.msg} */}
            <hr/>
            <button onClick={onChnageIn}>IN</button>
            <button onClick={onChangeOut}>OUT</button>
        </div>
    )
}

export default Quiz03StoreCom;