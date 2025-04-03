function MOneCom({user}) {
    return (<>
    {user && 
    <div>
        id : {user.id} <br/>
        name : {user.name} <br/>
        addr : {user.addr} <br/>
    </div> }
    </>)
}

export default MOneCom;