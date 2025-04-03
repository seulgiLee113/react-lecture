function Ex02ArrCom({arr01, arr02}) {

    return (
        <>
        <ul>
            {arr01.map( n=> <li key={n}>{n}</li>)}
        </ul>
        <ol>
            {arr02.map( (n, index) => <li key={index}>{n}</li>)}
        </ol>
        </>
    )
}

export default Ex02ArrCom;