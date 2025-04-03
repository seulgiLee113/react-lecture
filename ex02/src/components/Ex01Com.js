function Ex01Com( {click  ,num}) {
    return (<>
        {num === 100 ? "100과 같다" : "다르다"};
        <hr/>
        num : {num} <br/>
        <button onClick={click}>클릭</button>
    </>)
}


export default Ex01Com;