
function Quiz01Component( {plus, minus, n}) {

    console.log("num : ", n);

    return (
        <>
        {n}
        <br/>
        <hr/>
        <br/>
    
        <button onClick={plus} >+</button>
        <button onClick={minus} >-</button>
        </>
    )
}

export default Quiz01Component;