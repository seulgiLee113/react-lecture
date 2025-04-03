const ReducerCom = ({state, onUp, onDown}) => {
    return (
        <>
            {state.value}<br/>
            <button onClick={onUp}>up</button>
            <button onClick={onDown}>down</button>
        </>
    )
}

export default ReducerCom;