import { useContext } from "react";
import { TestContext } from "../store/TestContext";

const ListCom = ( {data, loading, error } ) => {

    const {num} = useContext(TestContext)

    return (
        <>
        <h3>num : {num}</h3>
            {loading ? <h3>Loading...</h3> : 
            error ? <h3>{ error} </h3> :
            data && data.map( d => 
                <div key={d.id}>
                    <span>{d.id}</span><br/>
                    <span>{d.name}</span><br/>
                    <span>{d.addr}</span><br/>
                </div>
            )}
        </>
    )
}

export default ListCom;