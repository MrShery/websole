function DoStap(props) {

    return (
        <div className={props.stapclass}>
            <span>{props.number}</span>
            <i className={props.icon}></i>
            <h4>{props.hding}</h4>
        </div>
    );
}


export default DoStap