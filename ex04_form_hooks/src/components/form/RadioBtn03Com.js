const RadioBtn03Com = ({list, onChange, onSubmit}) => {
    return (
        <>
        <form onSubmit={onSubmit}>
            {list && list.map((item) => 
            <span key={item.key}>
                <label>{item.value}</label>
                <input type="radio" name={item.name} checked={item.isChecked}
                    value={item.value} 
                    onChange={ () => onChange(item.key)}/>
            </span>)}
            <button>클릭</button>
        </form>
        </>
    )
}

export default RadioBtn03Com